"use client";
import React, { useEffect, useState } from "react";
import ModalUserUpdate from "./components/ModalUserUpdate";
import UserService from "@/service/UserService";
import User from "@/types/User";
import ModalExportFile from "@/components/ModalExportFile";
import { Pagination } from "@mui/material";
import SearchUserFrom from "./components/SearchUserForm";
import ListUser from "./components/ListUser";
import ModalDelete from "@/components/ModalDelete";
import ContentHeader from "@/components/ContentHeader";

type Props = {};

export default function UserList({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalExport, setShowModalExport] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

 

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

  const handleDelete = (id: number) => {
    setShowModalDelete(true);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };
  return (
    <>
      <ContentHeader
        title="Quản lý nhân viên"
        titleCreate="Thêm nhân viên"
        handleModalCreate={handleModalUpdate}
        handleModalExport={handleModalExport}
      />
      <div className="mx-5 mt-4">
        <SearchUserFrom />
      </div>
      <div className="mx-5 mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <ListUser userList={userList} handleDelete={handleDelete} />
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
      <ModalDelete
        showModalDelete={showModalDelete}
        handleCloseModalDelete={handleCloseModalDelete}
      />
    </>
  );
}
