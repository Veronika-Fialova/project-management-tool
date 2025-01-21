import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { supabase } from '../../../supabaseClient'
import Header from "../../components/Header";
import { useAppSelector } from "../../redux";
import { dataGridClassNames, dataGridSxStyles } from "../../lib/utils";
import Image from "next/image";

const TeamsTable = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const { data, error } = await supabase
          .from("teams")
          .select("id, name, logo");

        if (error) {
          console.error("Error fetching teams:", error);
        } else {
          setTeams(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching teams:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const columns = [
    { field: "logo", headerName: "Team Logo", width: 100,
        renderCell: (params) => {
            return (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-9 w-9">
                  <Image
                    src={`/${params.row.logo}`}
                    alt="{params.row.name}"
                    width={100}
                    height={50}
                    className="h-full object-cover"
                  />
                </div>
              </div>
            );
        },
        },
    
    { field: "name", headerName: "Team Name", width: 200},
  ];

  return (
    <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
          <div className="pt-5">
            <Header
              name="Teams"
            />
          </div>
          <DataGrid
            rows={teams || []}
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

export default TeamsTable;