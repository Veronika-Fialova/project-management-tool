import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {supabase} from '../supabaseClient'
import Header from "../components/Header";

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
    { field: "id", headerName: "ID", width: 150, editable: true },
    { field: "name", headerName: "Name", width: 200, editable: true },
    { field: "description", headerName: "Description", width: 300, editable: true },
    { field: "startDate", headerName: "Start Date", width: 150, editable: true },
    { field: "endDate", headerName: "End Date", width: 150, editable: true },
  ];

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
          <Header
            name="Projects"
            isSmallText/>
          </div>
      <DataGrid
        rows={projects.map((project) => ({ ...project, id: project.id }))}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 50]}
        loading={loading}
      />
    </div>
  );
};

export default ProjectsTable;