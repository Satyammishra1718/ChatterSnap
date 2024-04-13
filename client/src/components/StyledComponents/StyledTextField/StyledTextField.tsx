import { styled , TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(() => ({
    "& .MuiFormLabel-asterisk": {
      color: "red",
    },
  }));