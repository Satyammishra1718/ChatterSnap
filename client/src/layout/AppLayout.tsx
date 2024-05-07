import { Grid } from "@mui/material";
import Footer from "../components/CommonComponents/Footer/Footer";
import Header from "../components/CommonComponents/Header/Header";
import Title from "../components/CommonComponents/Title/Title";
import ChatList from "../components/CommonComponents/ChatList/ChatList";
import { sampleData } from "../constants/data.constants";
import { useParams } from "react-router-dom";
import Profile from "../components/CommonComponents/Profile/Profile";

const AppLayout = () => (WrappedComponent: any) => {
  return (props: any) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e : any,_id : any,groupChat : any) => {
       e.preventDefault();
       console.log("Delete Chat",_id,groupChat);
    }

    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            height={"100%"}
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <ChatList
              chats={sampleData}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
        <Footer />
      </>
    );
  };
};

export default AppLayout;
