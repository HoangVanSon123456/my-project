"use client";
import React, { useEffect, useState } from "react";
import ModalUserUpdate from "./components/ModalUserUpdate";
import UserService from "@/service/UserService";
import User from "@/types/User";
import ModalExportFile from "@/components/ModalExportFile";
import { Pagination } from "@mui/material";
import SearchUserFrom from "./components/SearchUserFrom";
import ListUser from "./components/ListUser";

type Props = {};

export default function UserList({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalExport, setShowModalExport] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = async () => {
    await UserService.getList()
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleModalUpdate = () => {
    setShowModal(true);
  };

  const handleModalExport = () => {
    setShowModalExport(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalExport = () => {
    setShowModalExport(false);
  };
  return (
    <>
      <div className="flex flex-row mx-5 mt-5 justify-between">
        <div className="items-start">
          <span className="font-bold text-3xl">Quản lý nhân viên</span>
        </div>
        <div className="items-end">
          <button
            type="button"
            onClick={handleModalUpdate}
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Thêm nhân viên
          </button>
          <button
            type="button"
            className="text-gray-700 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleModalExport}
          >
            Xuất tài liệu
          </button>
        </div>
      </div>
      <div className="mx-5 mt-4">
        <SearchUserFrom />
      </div>
      <div className="mx-5 mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <ListUser userList={userList} />
          <div className="flex justify-end p-3">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </div>
      </div>
      <ModalUserUpdate
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
      <ModalExportFile
        showModalExport={showModalExport}
        handleCloseModalExport={handleCloseModalExport}
      />
    </>
  );
}
