import React, { lazy, useState } from "react";
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

const SearchModal = lazy(() => import("../SearchModal/SearchModal"));
const NotificationModal = lazy(() => import("../NotificationModal/NotificationModal"));
const NewGroupModal = lazy(() => import("../NewGroupModal/NewGroupModal"));
const LogoutModal = lazy(() => import("../LogoutModal/LogoutModal"));

type IconButtonData = {
  title: string;
  icon: React.ReactNode ;
  onClick: () => void;
};


const Header = () => {
  const navigate = useNavigate();
  const [isSearchOpen , setIsSearchOpen] = useState(false);
  const [isNotificationOpen , setIsNotificationOpen] = useState(false);
  const [isNewGroupOpen , setIsNewGroupOpen] = useState(false);
  const handleMobile = () => {
    console.log("hii");
  };

  const SearchOpen = () => {
    setIsSearchOpen(true);
  }

  const NotificationsOpen = () => {
    setIsNotificationOpen(true);
  }

  const newGroupOpen = () => {
    setIsNewGroupOpen(true);
  }

  const iconButtonData: IconButtonData[] = [
    {
      title: "Search",
      icon: <SearchIcon />,
      onClick: () => SearchOpen(),
    },
    {
      title: "New Group",
      icon: <AddIcon />,
      onClick: () => newGroupOpen(),
    },
    {
      title: "Manage Groups",
      icon: <GroupIcon />,
      onClick: () => navigate("/groups"),
    },
    {
      title: "Notifications",
      icon: <NotificationIcon />,
      onClick: () => NotificationsOpen(),
    },
    {
      title: "Logout",
      icon: <LogoutIcon />,
      onClick: () => console.log("Logout"),
    },
  ];

  return (
    <>
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

    {isSearchOpen && <SearchModal/>}
    {isNotificationOpen && <NotificationModal />}
    {isNewGroupOpen && <NewGroupModal />}
    </>
  );
};

export default Header;
