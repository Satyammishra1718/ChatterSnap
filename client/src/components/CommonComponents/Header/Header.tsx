import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";
import {  useNavigate } from "react-router-dom";

type IconButtonData = {
  title: string;
  icon: React.ReactNode ;
  onClick: () => void;
};


const Header = () => {
  const navigate = useNavigate();
  const handleMobile = () => {
    console.log("hii");
  };

  const iconButtonData: IconButtonData[] = [
    {
      title: "Search",
      icon: <SearchIcon />,
      onClick: () => console.log("Search"),
    },
    {
      title: "New Group",
      icon: <AddIcon />,
      onClick: () => console.log("New Group"),
    },
    {
      title: "Manage Groups",
      icon: <GroupIcon />,
      onClick: () => navigate("/groups"),
    },
    {
      title: "Notifications",
      icon: <NotificationIcon />,
      onClick: () => console.log("notifications"),
    },
    {
      title: "Logout",
      icon: <LogoutIcon />,
      onClick: () => console.log("Logout"),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar position="static" sx={{ bgcolor: "#87CEEB" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ChatterSnap
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {iconButtonData.map((item, index) => (
              <Tooltip key={index} title={item.title}>
                <IconButton color="inherit" size="large" onClick={item.onClick}>
                  {item.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
