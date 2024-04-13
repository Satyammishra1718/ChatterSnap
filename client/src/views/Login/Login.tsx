import { Button } from "@mui/material";
import { Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";
import { StyledTextField } from "../../components/StyledComponents/StyledTextField/StyledTextField";
import _ from "lodash";

import { textFieldsDataLogin } from "../../constants/data.constants";
import { TextFieldData } from "../../constants/types.constants";

const Login = (): React.ReactNode => {
  const navigate = useNavigate();

  const navigateToRegister = (): void => {
    navigate("/register");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #87CEEB, #F0F8FF)",
        overflowX:"hidden",
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
          <title>SignIn Page</title>
          <meta name="description" content="Login to your account" />
        </Helmet>
        <Paper
          elevation={24}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius:"1rem"
          }}
        >
          <Typography variant="h5">Sign In</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            {_.map(
              textFieldsDataLogin,
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
              Login
            </Button>
            <Typography
              textAlign="center"
              marginTop={"1rem"}
              marginBottom={"0.5rem"}
            >
              OR
            </Typography>
            <Button variant="text" fullWidth onClick={navigateToRegister}>
              Didn't have an account ? Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
