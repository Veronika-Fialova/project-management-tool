import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { supabase } from '../../../supabaseClient'
import Header from "../../components/Header";
import { useAppSelector } from "../../redux";
import { dataGridClassNames, dataGridSxStyles } from "../../lib/utils";
import Image from "next/image";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("id, name, profilePicture, teamId, teamRole");

        if (error) {
          console.error("Error fetching users:", error);
        } else {
          setUsers(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { field: "profilePicture", headerName: "", width: 80,
        renderCell: (params) => {
            return (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-9 w-9">
                  <Image
                    src={`/${params.row.profilePicture}`}
                    alt="{params.row.name}"
                    width={100}
                    height={50}
                    className="h-full rounded-full object-cover"
                  />
                </div>
              </div>
            );
        },
        },
    { field: "name", headerName: "Name", width: 200},
    { field: "teamRole", headerName: "Role", width: 200},
  ];

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header
              name="Users"
            />
          </div>
          <DataGrid
            rows={users || []}
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

export default UsersTable;