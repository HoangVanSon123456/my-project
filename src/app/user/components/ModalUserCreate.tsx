import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useForm } from "react-hook-form";
import User from "@/types/User";
import { closeModal } from "@/utils/common";
import * as yup from "yup";
import { COMMON_MESSAGE } from "@/constants/common";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  showModalCreate: boolean;
  submitItem: Function;
  changeShow: Function;
};

const schema = yup
  .object({
    fullName: yup.string().required(COMMON_MESSAGE.FIELD_REQUIRED).trim(),
    firstName: yup.string().required(COMMON_MESSAGE.FIELD_REQUIRED).trim(),
    lastName: yup.string().required(COMMON_MESSAGE.FIELD_REQUIRED).trim(),
    userName: yup.string().required(COMMON_MESSAGE.FIELD_REQUIRED).trim(),
    password: yup.string().required(COMMON_MESSAGE.FIELD_REQUIRED).trim(),
    address: yup.string().required(COMMON_MESSAGE.FIELD_REQUIRED).trim(),
    phone: yup
      .string()
      .required(COMMON_MESSAGE.FIELD_REQUIRED)
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, COMMON_MESSAGE.FIELD_PHONE)
      .trim(),
    email: yup
      .string()
      .required(COMMON_MESSAGE.FIELD_REQUIRED)
      .email(COMMON_MESSAGE.FIELD_EMAIL)
      .trim(),
    status: yup.number().required(COMMON_MESSAGE.FIELD_REQUIRED),
  })
  .required();

export default function ModalUserCreate({
  showModalCreate,
  submitItem,
  changeShow,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: User) => {
    if (submitItem) {
      submitItem(data);
      reset();
    }
  };
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModalCreate}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h3"
            textColor="inherit"
            fontWeight="lg"
            mb={2}
          >
            Thêm nhân viên
          </Typography>
          <div className="grid mb-4">
            <div className="relative z-0 w-full group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Họ và Tên
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Nhập tên"
                {...register("fullName")}
              />
            </div>
          </div>
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
                Trạng thái
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                {...register("status")}
              >
                <option value="1">Đang hoạt động</option>
                <option value="2">Không hoạt động</option>
                <option value="3">Khóa tài khoản</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-4 group">
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Nhập số điện thoại"
                {...register("phone")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Thêm nhân viên
          </button>
        </form>
      </Sheet>
    </Modal>
  );
}
