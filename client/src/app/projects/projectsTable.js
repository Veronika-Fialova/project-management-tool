import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {supabase} from '../supabaseClient'
import Header from "../components/Header";
import { useAppSelector } from "../redux";
import { dataGridClassNames, dataGridSxStyles } from "./projectsTableUtils";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("id, name, description, startDate, endDate");

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
  ];

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header
              name="Projects"
            />
          </div>
          <DataGrid
            rows={projects.map((project) => ({ ...project, id: project.id }))}
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
    </div>
  );
};

export default ProjectsTable;