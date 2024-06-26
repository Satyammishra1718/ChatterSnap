import React, { useState } from "react";
import { Avatar, Button, IconButton, Stack } from "@mui/material";
import { Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../../components/StyledComponents/VisuallyHiddenInput/VisuallyHiddenInput";
import { StyledTextField } from "../../components/StyledComponents/StyledTextField/StyledTextField";
import _ from "lodash";

import { textFieldsDataRegister } from "../../constants/data.constants";
import { TextFieldData } from "../../constants/types.constants";
import { validateRegisterField } from "../../utils/FormValidation";
import Title from "../../components/CommonComponents/Title/Title";

const Register = (): React.ReactNode => {
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);

  const [values, setValues] = useState<{ [Key: string]: string }>({
    FullName: "",
    Username: "",
    Password: "",
    Bio: "",
  });

  const [errors, setErrors] = useState<{ [Key: string]: string }>({
    FullName: "",
    Username: "",
    Password: "",
    Bio: "",
  });

  const navigateToLogin = (): void => {
    navigate("/login");
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file && setImage(file);
  };

  const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({});
    _.forEach(textFieldsDataRegister, (textField) => {
      const errorMessage = validateRegisterField(
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
        <Title title="SignUp Page" description="Create new account" />
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
            // "&::-webkit-scrollbar": {
            //   display: "none",
            // },
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
                alt="Avatar"
                src={image ? URL.createObjectURL(image) : undefined}
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
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </>
              </IconButton>
            </Stack>
            {_.map(
              textFieldsDataRegister,
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
              onClick={(e: any) => handleRegister(e)}
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

export default Register;
