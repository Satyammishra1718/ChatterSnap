import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../../constants/data.constants";

interface NotificationItemProps {
  sender ?: any,
  _id ? : any,
  handler ?:any,
}

const Notifications = () => {

  const friendRequestHandler = async ( _id : any, accept : any ) => {
  
  };

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"30rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {
          <>
            {sampleNotifications.length > 0 ? (
              sampleNotifications.map(( sender : any, _id : any) => (
                <NotificationItem
                  sender={sender}
                  _id={_id}
                  handler={friendRequestHandler}
                  key={_id}
                />
              ))
            ) : (
              <Typography textAlign={"center"}>No notifications</Typography>
            )}
          </>
        }
      </Stack>
    </Dialog>
  );
};

const NotificationItem : React.FC<NotificationItemProps> = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender.sender;
  return (
    <ListItem>
      <Stack
        alignItems={"center"}
        width={"100%"}
      >
        <Stack 
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"} >
        <Avatar />

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={"1rem"}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;