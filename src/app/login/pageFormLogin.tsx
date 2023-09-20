"use client";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/types/User";
import { useRouter } from "next/navigation";
import classNames from "classnames";

export default function FormLogin() {
  const router = useRouter();

  const validateScheme = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateScheme),
  });

  const loginUser = (data: User) => {
    if (data.email == "" && data.password == "12345678") {
      router.push("/");
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit(loginUser)}>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className={classNames(
              "shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:bg-blue-100",
              {
                "is-invalid": Boolean(errors?.password?.message),
              }
            )}
            placeholder=" "
            {...register("password")}
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Address Email
          </label>
        </div>
        <div className="mt-2">
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className={classNames(
                "shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:bg-blue-100",
                {
                  "is-invalid": Boolean(errors?.password?.message),
                }
              )}
              placeholder=" "
              {...register("password")}
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="text-right mb-8 font-light text-sm">
          <a>Forgot password?</a>
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
