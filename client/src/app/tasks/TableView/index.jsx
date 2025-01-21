"use client"

import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { supabase } from '../../../supabaseClient'
import { useAppSelector } from "../../redux";
import { dataGridClassNames, dataGridSxStyles } from "../../lib/utils";

const TableView = () => {
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
    { field: "status", headerName: "Status", width: 150,
      renderCell: (params) => {
        const statusClassMap = {
          "To do": "bg-red-200 text-red-700",
          "Work in Progress": "bg-yellow-200 text-yellow-700",
          "Under Review": "bg-green-200 text-green-700",
          Completed: "bg-blue-200 text-blue-700",
        };

        const statusClass = statusClassMap[params.value] || "bg-gray-200 text-gray-700";

        return (
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${statusClass}`}>
            {params.value}
          </span>
        );
      },
    },
    { field: "priority", headerName: "Priority", width: 150},
  ];

  return (
    <div className="h-[540px] w-full px-4 pt-8 pb-8 xl:px-1">
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

export default TableView;