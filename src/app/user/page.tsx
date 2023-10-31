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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalUserDetail from "./components/ModalUserDetail";

type Props = {};

export default function UserList({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalExport, setShowModalExport] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = async () => {
    const response = await UserService.getList();
    setUserList(response.data.data);
    setNumberOfElements(response.data.numberOfElements);
    setTotalPages(response.data.totalPages);
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
        toast.success("Cập nhật thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Cập nhật thất bại");
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
        toast.success("Xóa thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Thất bại");
      });
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
        toast.success("Thêm Thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Thêm Thất bại");
      });
  };

  const handleDetail = (id: number) => {
    if (id > 0) {
      const r = find(userList, { id });
      if (r) {
        setShowModalDetail(true);
        setUser(r);
      }
    }
  };

  const handleModalCreate = () => {
    setShowModalCreate(true);
  };

  const handleModalExport = () => {
    setShowModalExport(true);
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
            handleDetail={handleDetail}
          />
          <div className="flex justify-end p-3">
            <Pagination
              count={totalPages}
              page={numberOfElements}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
      <ModalUserUpdate
        showModal={showModal}
        updateItem={updateItem}
        user={user}
        changeShow={(s: boolean) => setShowModal(s)}
      />
      <ModalUserCreate
        showModalCreate={showModalCreate}
        submitItem={submitItem}
        changeShow={(s: boolean) => setShowModalCreate(s)}
      />
      <ModalExportFile
        showModalExport={showModalExport}
        changeShow={(s: boolean) => setShowModalExport(s)}
      />
      <ModalDelete
        showModalDelete={showModalDelete}
        submitAction={deleteItem}
        changeShow={(s: boolean) => setShowModalDelete(s)}
      />
      <ModalUserDetail
        changeShow={(s: boolean) => setShowModalDetail(s)}
        showModalDetail={showModalDetail}
        user={user}
      />
    </>
  );
}
