import { useState } from "react";
import { Button } from "@mui/material";
import { Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { StyledTextField } from "../../components/StyledComponents/StyledTextField/StyledTextField";
import _ from "lodash";

import { textFieldsDataLogin } from "../../constants/data.constants";
import { TextFieldData } from "../../constants/types.constants";
import { validateLoginField } from "../../utils/FormValidation";
import Title from "../../components/CommonComponents/Title/Title";

const Login = (): React.ReactNode => {
  const navigate = useNavigate();

  const [values, setValues] = useState<{ [Key: string]: string }>({
    Username: "",
    Password: "",
  });

  const [errors, setErrors] = useState<{ [Key: string]: string }>({
    Username: "",
    Password: "",
  });

  const navigateToRegister = (): void => {
    navigate("/register");
  };

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    setValues((v) => ({
      ...v,
      [id]: e.target.value,
    }));
  };

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({});
    _.forEach(textFieldsDataLogin, (textField) => {
      const errorMessage = validateLoginField(
        values[textField.label],
        textField.label
      );
      setErrors((prevErrors: object) => ({
        ...prevErrors,
        [textField.label]: errorMessage,
      }));
    });
    e.preventDefault();
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
          padding: "0 2rem",
        }}
      >
        <Title title="SignIn Page" description="Login to your account" />
        <Paper
          elevation={24}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "1rem",
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
                  fullWidth
                  label={textField.label}
                  type={textField.type === "text" ? "text" : "password"}
                  margin="normal"
                  variant="outlined"
                  value={values[textField.label]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onValueChange(e, textField.label)
                  }
                  helperText={errors[textField.label]}
                  error={errors[textField.label].length > 0}
                  onFocus={() =>
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      [textField.label]: "",
                    }))
                  }
                />
              )
            )}
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              onClick={(e: any) => handleLogin(e)}
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
