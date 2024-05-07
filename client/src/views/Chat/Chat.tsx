import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AppLayout from "../../layout/AppLayout";
import { IconButton, Skeleton, Stack } from "@mui/material";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import  {InputBox}  from "../../components/StyledComponents/InputBox/InputBox";

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor="rgba(247,247,247,1)"
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "0.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox
            placeholder="Type Message Here..."
          />

          <IconButton
            type="submit"
            sx={{
              rotate: "-1deg",
              bgcolor: "#87CEEB" ,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              transition: "background-color 0.4s, transform 0.4s",
              "&:hover": {
                bgcolor: "#6FA8DC",
                transform:"scale(1.1)"
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

    </>
  );
};

export default AppLayout()(Chat);