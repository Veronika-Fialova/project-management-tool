"use client"

import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { supabase } from '../../../supabaseClient'
import { useAppSelector } from "../../redux";
import { dataGridClassNames, dataGridSxStyles } from "../../lib/utils";
import Link from "next/link";

const ProjectTasksTable = (isSmallText = false) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .select("id, title, description, status, priority");

        if (error) {
          console.error("Error fetching tasks:", error);
        } else {
          setTasks(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const columns = [
    { field: "title", headerName: "Task", width: 150},
    { field: "description", headerName: "Description", width: 200},
    { field: "status", headerName: "Status", width: 150},
    { field: "priority", headerName: "Priority", width: 150},
    { field: "action", headerName: "Action", width: 100,
      renderCell: (params) => {
        return (
          <div className="flex items-center justify-center">
              <Link href={`/projects/${params.row.id}`}>
                <button className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
                </button>
              </Link>
          </div>
        );
      },
      },
  ];

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-1">
        <h2 className={`pb-4 ${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}>
        Tasks
        </h2>
          <DataGrid
            rows={tasks || []}
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

export default ProjectTasksTable;