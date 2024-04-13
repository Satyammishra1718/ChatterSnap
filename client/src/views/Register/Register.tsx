import React from "react";
import { Avatar, Button, IconButton, Stack } from "@mui/material";
import { Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../../components/StyledComponents/VisuallyHiddenInput/VisuallyHiddenInput";
import { Helmet } from "react-helmet-async";
import { StyledTextField } from "../../components/StyledComponents/StyledTextField/StyledTextField";
import _ from "lodash";

import { textFieldsDataRegister } from "../../constants/data.constants";
import { TextFieldData } from "../../constants/types.constants";

const Login = (): React.ReactNode => {
  const navigate = useNavigate();

  const navigateToLogin = (): void => {
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #87CEEB, #F0F8FF)",
        overflowX: "hidden",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"0 2rem",
        }}
      >
        <Helmet>
          <title>SignUp Page</title>
          <meta name="description" content="Create new account" />
        </Helmet>
        <Paper
          elevation={24}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: "90vh",
            overflowY: "scroll",
            borderRadius: "1rem",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Typography variant="h5">Sign Up</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
              <Avatar
                sx={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "contain",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  color: "white",
                  bgcolor: "rgba(0,0,0,0.5)",
                  ":hover": {
                    bgcolor: "rgba(0,0,0,0.7)",
                  },
                }}
                component="label"
              >
                <>
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" />
                </>
              </IconButton>
            </Stack>
            {_.map(
              textFieldsDataRegister,
              (textField: TextFieldData, index: number) => (
                <StyledTextField
                  key={index}
                  required
                  fullWidth
                  label={textField.label}
                  type={textField.type === "text" ? "text" : "password"}
                  margin="normal"
                  variant="outlined"
                />
              )
            )}
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Register
            </Button>
            <Typography
              textAlign="center"
              marginTop={"1rem"}
              marginBottom={"0.5rem"}
            >
              OR
            </Typography>
            <Button variant="text" fullWidth onClick={navigateToLogin}>
              Already have an account ? Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
