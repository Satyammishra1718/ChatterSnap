import AppLayout from "../../layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      bgcolor="rgba(247,247,247,1)"
      height={"100%"} 
      display="flex" 
      alignItems="center"  
      justifyContent="center" 
    >
      <Typography variant="h4">
        Select a Friend to Chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
