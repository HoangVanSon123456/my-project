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
import { find } from "lodash";
import ModalUserCreate from "./components/ModalUserCreate";

type Props = {};

export default function UserList({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalExport, setShowModalExport] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = async () => {
    await UserService.getList()
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const updateItem = async (data: User) => {
    let userId = 0;
    if (data.id && user) {
      userId = user.id!;
    }
    await UserService.updateUser(data, userId)
      .then((res) => {
        console.log(res);
        setUserList((prev) => [...prev, res]);
        setShowModal(false);
        getListUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id: number) => {
    console.log(id);
    setShowModalDelete(true);
    setItemId(id);
  };

  const deleteItem = async () => {
    await UserService.deleteUser(itemId)
      .then(() => {
        getListUser();
        setShowModalDelete(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id: number) => {
    if (id > 0) {
      const r = find(userList, { id });
      if (r) {
        setShowModal(true);
        setUser(r);
      }
    }
  };

  const submitItem = async (data: User) => {
    await UserService.createUser(data)
      .then((res) => {
        console.log(res);
        setUserList((prev) => [...prev, res]);
        setShowModalCreate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModalCreate = () => {
    setShowModalCreate(true);
  };

  const handleModalExport = () => {
    setShowModalExport(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowModalCreate(false);
  };

  const handleCloseModalExport = () => {
    setShowModalExport(false);
  };

  const handleCloseModalDelete = () => {
    setShowModalDelete(false);
  };
  return (
    <>
      <ContentHeader
        title="Quản lý nhân viên"
        titleCreate="Thêm nhân viên"
        handleModalUpdate={handleModalCreate}
        handleModalExport={handleModalExport}
      />
      <div className="mx-5 mt-4">
        <SearchUserFrom />
      </div>
      <div className="mx-5 mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <ListUser
            userList={userList}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
          <div className="flex justify-end p-3">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </div>
      </div>
      <ModalUserUpdate
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        updateItem={updateItem}
        user={user}
      />
      <ModalUserCreate
        showModalCreate={showModalCreate}
        handleCloseModal={handleCloseModal}
        submitItem={submitItem}
      />
      <ModalExportFile
        showModalExport={showModalExport}
        handleCloseModalExport={handleCloseModalExport}
      />
      <ModalDelete
        showModalDelete={showModalDelete}
        handleCloseModalDelete={handleCloseModalDelete}
        submitAction={deleteItem}
      />
    </>
  );
}
