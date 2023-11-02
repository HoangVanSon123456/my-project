import React from "react";
import { useForm } from "react-hook-form";
import SearchUser from "../types";

type Props = { handleSearchUser: Function; getListUser: Function };

export default function SearchUserFrom({
  handleSearchUser,
  getListUser,
}: Props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: SearchUser) => {
    if (handleSearchUser) {
      handleSearchUser(
        data.fullName! + data.userName + data.phone + data.email
      );
    }
  };

  const handleResetForm = () => {
    reset({
      fullName: "",
      userName: "",
      phone: "",
      email: "",
    });
    getListUser();
  };

  return (
    <section className="bg-white rounded-lg">
      <div className=" mx-5 lg:py-4">
        <h2 className="mb-3 text-xl font-bold text-gray-600">
          Tìm kiếm nhân viên
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: Hoàng Văn Sơn"
                {...register("fullName")}
              />
            </div>
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Tên tài khoản
              </label>
              <input
                type="text"
                id="userName"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: Hoangvanson123"
                {...register("userName")}
              />
            </div>
            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: 0123456789,..."
                {...register("phone")}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: hoangvanson@gmail.com,..."
                {...register("email")}
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2"
              onClick={handleResetForm}
            >
              Reset
            </button>
            <button
              type="submit"
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
