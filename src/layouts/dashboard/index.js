import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme,  } from "@mui/material/styles";
import Sidebar from "./Sidebar";



const DashboardLayout = () => {
  const theme = useTheme();
 

  return (
    <Stack direction="row" sx={{ height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;