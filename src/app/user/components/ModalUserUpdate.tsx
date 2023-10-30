"use client";
import React, { useEffect } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useForm } from "react-hook-form";
import User from "@/types/User";
import { closeModal } from "@/utils/common";
type Props = {
  showModal: boolean;
  user?: User;
  changeShow: Function;
  updateItem: Function;
};

export default function ModalUserUpdate({
  showModal,
  updateItem,
  user,
  changeShow,
}: Props) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: User) => {
    if (updateItem) {
      updateItem(data);
    }
  };

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModal}
      onClose={() => closeModal(changeShow)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: 1000,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h3"
          textColor="inherit"
          fontWeight="lg"
          mb={2}
        >
          Cập nhật nhân viên
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Tên
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập tên"
                {...register("firstName")}
              />
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Họ
              </label>
              <input
                type="text"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập họ"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Tên tài khoản
              </label>
              <input
                type="text"
                id="userName"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập tên tài khoản"
                {...register("userName")}
              />
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập mật khẩu"
                {...register("password")}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập email"
                {...register("email")}
              />
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Địa chỉ
              </label>
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập địa chỉ"
                {...register("address")}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập số điện thoại"
                {...register("phone")}
              />
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Trạng thái
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                {...register("status")}
              >
                <option value="1">Đang hoạt động</option>
                <option value="2">Không hoạt động</option>
                <option value="3">Khóa tài khoản</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            Cập nhật nhân viên
          </button>
        </form>
      </Sheet>
    </Modal>
  );
}
