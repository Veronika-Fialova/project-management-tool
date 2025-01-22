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
    { field: "status", headerName: "Status", width: 150,},
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