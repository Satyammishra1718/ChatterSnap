import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const CustomLink = styled(LinkComponent)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});
