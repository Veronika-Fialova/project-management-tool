export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

  export const dataGridSxStyles = (isDarkMode) => {
    return {
        "& .MuiDataGrid-columnHeaders": {
            color: `${isDarkMode ? "#e5e7eb" : ""}`,
            '& [role="row"] > *': {
              backgroundColor: `${isDarkMode ? "#1d1f21" : "white"}`,
              borderColor: `${isDarkMode ? "#2d3135" : ""}`,
            },
        },
        "& .MuiTablePagination-root": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiTablePagination-selectIcon": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiDataGrid-toolbar": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiDataGrid-toolbarContainer": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiTextField-root .MuiSvgIcon-root": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiTextField-root input": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiButtonBase-root": {
            color: `${isDarkMode ? "#a3a3a3" : ""}`,
        },
        "& .MuiDataGrid-cell": {
            border: "none",
        },
        "& .MuiDataGrid-row": {
            borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "e5e7eb"}`,
        },
        "& .MuiDataGrid-withBorderColor": {
            borderColor: `${isDarkMode ? "#2d3135" : "e5e7eb"}`,
        },
    };
  };