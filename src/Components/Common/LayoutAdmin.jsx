import React, { useEffect } from "react";
import Topbar from "./Topbar/Topbar";
import Sidebar from "./Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import {Box} from "@mui/material";

const LayoutAdmin = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
//   useEffect(() => {
//     if (!user) {
//       navigate("/Login");
//     } else if (!user.level) {
//       navigate("/");
//     }
//   }, []);

  return (
    <Box>
      <Topbar />
      <Box display='flex' mt={2}>
        <Sidebar />
        <Box flex={4}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
export default LayoutAdmin;