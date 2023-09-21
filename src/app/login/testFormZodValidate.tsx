"use client";
import { useForm } from "react-hook-form";
import { User } from "@/types/User";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function TestFormLogin() {
  const router = useRouter();

  const validateScheme = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    password: z.string().min(6),
  });

  type validateSchemeType = z.infer<typeof validateScheme>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validateSchemeType>({ resolver: zodResolver(validateScheme) });

  const loginUser = (data: User) => {
    if (data.email == "abc@gmail.com" && data.password == "Abc@123456") {
      router.push("/");
      console.log({ data });
    } else {
      alert("Sign in failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginUser)}>
        <div className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="s appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:bg-blue-100"
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
        <div className="relative mt-2">
          <input
            type="text"
            id="floating_outlined"
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:bg-blue-100"
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
            <p className="text-sm text-red-400">{errors.password.message}</p>
          )}
        </div>
        <div className="text-right mb-4 font-light text-xs italic text-sky-900">
          <a href="/forgotpassword">Forgot password?</a>
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
