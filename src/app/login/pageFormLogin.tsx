"use client";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/types/User";
import { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Google from "../../../public/google.svg";
import Apple from "../../../public/apple.svg";
import Image from "next/image";

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
          className="pb-1"
          id="email"
          label="Address email"
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
          error={Boolean(errors.password)}
          helperText={errors.password ? errors.password.message : " "}
          {...register("password", {
            max: 7,
          })}
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
          className="text-neutral-500 ml-[254px] font-roboto normal-case -mt-8"
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
        <div className="mt-32">
          <div className="relative flex items-center mb-5">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="px-3 italic font-medium text-gray-900 bg-white right-56">
              or
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button
            type="button"
            className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border border-gray-200 hover:bg-gray-200"
          >
            <Image src={Google} alt="" className="mx-2 ml-12" />
            Sign in with your Google account
          </button>
          <button
            type="button"
            className="w-full text-black bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 border border-gray-200 hover:bg-gray-200"
          >
            <Image src={Apple} alt="" className="mx-2 ml-12" />
            Sign in with your Apple account
          </button>
        </div>
      </form>
    </>
  );
}
