import { Stack, Avatar } from "@mui/material";
import ProfileCard from "../ProfileCard/ProfileCard";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
        sx={{
            width:200,
            height:200,
            objectFit:"contain",
            marginBottom:"1rem",
            border:"5px solid white",
        }}
        />
      <ProfileCard heading={"Bio"} text={"Carpediem !!!"}/>
      <ProfileCard heading={"Username"} text={"mesatyammishra"}/>
      <ProfileCard heading={"Name"} text={"Satyam Mishra"} />
      <ProfileCard heading={"Joined"} text={moment('2024-05-02').fromNow()} />
    </Stack>
  );
};

export default Profile;
