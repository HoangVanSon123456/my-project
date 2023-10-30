import React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { closeModal, getFieldHtml } from "@/utils/common";

import User, { Status } from "@/types/User";
type Props = { changeShow: Function; showModalDetail: boolean; user?: User };

export default function ModalUserDetail({
  changeShow,
  showModalDetail,
  user,
}: Props) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModalDetail}
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
          Chi tiết nhân viên
        </Typography>
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">{user?.fullName}</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Tên : </div>
              <div className="px-4 py-2">{user?.firstName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Họ : </div>
              <div className="px-4 py-2">{user?.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Tên tài khoản : </div>
              <div className="px-4 py-2">{user?.userName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Mật khẩu :</div>
              <div className="px-4 py-2">{user?.password}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email :</div>
              <div className="px-4 py-2">{user?.email}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Số điện thoại :</div>
              <div className="px-4 py-2">{user?.phone}</div>
            </div>

            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Trạng thái :</div>
              <div className="px-4 py-2">
                {getFieldHtml(Status, user?.status!)}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Địa chỉ :</div>
              <div className="px-4 py-2">{user?.address}</div>
            </div>
          </div>
        </div>
      </Sheet>
    </Modal>
  );
}
