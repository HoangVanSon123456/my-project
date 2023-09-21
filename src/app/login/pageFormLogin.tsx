"use client";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/types/User";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { useState } from "react";

export default function FormLogin() {
  const [show, setShow] = useState(false);

  const router = useRouter();

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

  const loginUser = async (data: User) => {
    if (data.email == "abc@gmail.com" && data.password == "Abc@123456") {
      await router.push("/");
      console.log({ data });
    } else {
      alert("Sign in failed");
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="s appearance-none border rounded w-full py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline hover:bg-green-100"
            placeholder=" "
            {...register("email")}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Address Email
          </label>
          {errors.email?.message && (
            <span className="text-red-500 text-xs error">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="relative mt-4">
          <input
            type="text"
            id="floating_outlined"
            className="shadow appearance-none w-full py-4 px-3 text-gray-700 leading-tight  border rounded focus:outline-none focus:shadow-outline hover:bg-green-100"
            placeholder=" "
            {...register("password")}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
          {errors.password?.message && (
            <span className="text-red-500 text-xs">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="text-right mb-4 font-light text-xs italic text-sky-900 mt-1">
          <button type="button" onClick={() => setShow(!show)}>
            Forgot Password
          </button>
        </div>
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[600px] flex flex-col">
            <button
              className="text-white text-xl place-self-end"
              onClick={closeModal}
              type="submit"
            >
              X
            </button>
            <div className="bg-white p-2">Modal</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-sky-900 hover:bg-blue-700 text-white font-serif py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
