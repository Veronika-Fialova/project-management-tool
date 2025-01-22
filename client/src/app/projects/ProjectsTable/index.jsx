import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { supabase } from '../../../supabaseClient'
import Header from "../../components/Header";
import { useAppSelector } from "../../redux";
import { dataGridClassNames, dataGridSxStyles } from "../../lib/utils";
import Link from "next/link";
import { PlusSquare } from "lucide-react";
import ModalNewProject from "../ModalNewProject";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("id, name, customer, description, startDate, endDate");

        if (error) {
          console.error("Error fetching projects:", error);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 15},
    { field: "name", headerName: "Name", width: 150},
    { field: "customer", headerName: "Customer", width: 150},
    { field: "description", headerName: "Description", width: 200},
    { field: "startDate", headerName: "Start Date", width: 100},
    { field: "endDate", headerName: "End Date", width: 100},
    { field: "action", headerName: "Action", width: 100,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
              <Link href={`/projects/${params.row.id}`}>
                <button className="px-3 py-2 text-xs font-medium text-center text-altepro-green
                bg-white border-solid border-2 border-altepro-green 
                hover:bg-altepro-green hover:text-white focus:outline-none focus:ring-0 ring-offset-0
                dark:bg-transparent dark:hover:bg-altepro-green">
                View
                </button>
              </Link>
          </div>
        );
      },
      },
  ];

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header
              name="Projects"
              buttonComponent={
            <button
              className="relative flex items-center justify-between bg-altepro-green opacity-80 text-white font-semibold hover:opacity-100 transition-opacity"
              onClick={() => setIsModalNewProjectOpen(true)}>
              <PlusSquare className="m-2 h-5 w-5" /> 
              New Project
              <div className="grid grid-cols-3 ml-2">
                <div className="w-3.5 h-3.5 bg-altepro-light-green"></div>
                <div className="w-3.5 h-3.5 bg-altepro-yellow"></div>
                <div className="w-3.5 h-3.5 bg-altepro-light-green"></div>
                <div className="w-3.5 h-3.5 bg-altepro-green"></div>
                <div className="w-3.5 h-3.5 bg-altepro-light-green"></div>
                <div className="w-3.5 h-3.5 bg-altepro-yellow"></div>
                <div className="w-3.5 h-3.5 bg-altepro-green"></div>
                <div className="w-3.5 h-3.5 bg-altepro-green"></div>
                <div className="w-3.5 h-3.5 bg-altepro-light-green"></div>
              </div>
            </button>
              }
            />
          </div>
          <DataGrid
            rows={projects || []}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 20]}
            loading={loading}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            className={dataGridClassNames}
            sx={dataGridSxStyles(isDarkMode)}
          />
          <ModalNewProject
            isOpen={isModalNewProjectOpen}
            onClose={() => setIsModalNewProjectOpen(false)}
          />
    </div>
  );
};

export default ProjectsTable;