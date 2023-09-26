"use client";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/types/User";
import { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const validateScheme = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required("Please Enter your Email"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateScheme),
  });

  const loginUser = (data: User) => {
    console.log({ data });
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)}>
        <TextField
          className="pb-2"
          id="email"
          label="Address email"
          focused
          autoComplete="email"
          fullWidth
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : " "}
          {...register("email")}
          placeholder="Type your email"
        />
        <TextField
          id="password"
          label="Password"
          autoComplete="password"
          type={showPassword ? "text" : "password"}
          fullWidth
          focused
          error={Boolean(errors.password)}
          helperText={errors.password ? errors.password.message : " "}
          {...register("password")}
          placeholder="Type your password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="button"
          variant="text"
          className="text-neutral-500 ml-[278px] font-roboto normal-case -mt-6"
        >
          forgot password
        </Button>
        <Button
          type="submit"
          fullWidth
          className="bg-main hover:bg-blue-500 text-white font-sans"
        >
          Login
        </Button>
      </form>
    </>
  );
}
