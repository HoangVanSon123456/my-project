"use client";
import React, { lazy, useEffect, useState } from "react";
import ModalUserUpdate from "./components/ModalUserUpdate";
import UserService from "@/service/UserService";
import User from "@/types/User";
import SearchUserFrom from "./components/SearchUserForm";
import ModalDelete from "@/components/ModalDelete";
import ContentHeader from "@/components/ContentHeader";
import { find } from "lodash";
import ModalUserCreate from "./components/ModalUserCreate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalUserDetail from "./components/ModalUserDetail";
import { HttpStatusCode } from "axios";
import PaginationTable from "@/components/PaginationTable";

const ListUser = lazy(() => import("./components/ListUser"));

type Props = {};

export default function UserList({}: Props) {
  const [userList, setUserList] = useState<User[]>([]);
  const [user, setUser] = useState<User>();
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    getListUser();
  }, [currentPage]);

  const getListUser = async () => {
    const response = await UserService.getList(currentPage);
    setUserList(response.data.data);
    setCurrentPage(response.data.currentPage);
    setTotalPages(response.data.totalPages);
    setTotalElements(response.data.totalElements);
  };

  const updateItem = async (data: User) => {
    let userId = 0;
    if (data.id && user) {
      userId = user.id!;
    }
    const response = await UserService.updateUser(data, userId);
    if (HttpStatusCode.Ok) {
      setUserList((prev) => [...prev, response]);
      setShowModal(false);
      getListUser();
      toast.success("Cập nhật thành công");
    } else {
      toast.error("Cập nhật thất bại");
    }
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
    const response = await UserService.createUser(data);
    if (HttpStatusCode.Ok) {
      setUserList((prev) => [...prev, response]);
      setShowModalCreate(false);
      getListUser();
      toast.success("Thêm Thành công");
    } else {
      toast.error("Thêm Thất bại");
    }
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

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page - 1);
  };

  const handleSearchUser = async (keyword: string) => {
    const response = await UserService.searchUser(keyword);
    if (HttpStatusCode.Ok) {
      setUserList(response.data);
      setCurrentPage(response.currentPage);
      setTotalPages(response.totalPages);
      setTotalElements(response.totalElements);
    } else {
      console.log("error");
    }
  };
  const handleModalCreate = () => {
    setShowModalCreate(true);
  };

  return (
    <>
      <ContentHeader
        title="Quản lý nhân viên"
        titleCreate="Thêm nhân viên"
        handleModalCreate={handleModalCreate}
      />
      <div className="mx-5 mt-4">
        <SearchUserFrom
          handleSearchUser={handleSearchUser}
          getListUser={getListUser}
        />
      </div>
      <div className="mx-5 mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <ListUser
            userList={userList}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleDetail={handleDetail}
          />
          <div className="p-3">
            <PaginationTable
              totalPage={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              countItem={totalElements}
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
