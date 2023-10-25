"use client";
import ContentHeader from "@/components/ContentHeader";
import ModalExportFile from "@/components/ModalExportFile";
import React, { use, useState } from "react";
import SearchCustomerFrom from "./components/SearchCustomerForm";
import { Pagination } from "@mui/material";
import ListCustomer from "./components/ListCustomer";
import Customer from "@/types/Customer";

type Props = {};

export default function CustomerList({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalExport, setShowModalExport] = useState(false);
  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

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
    <div className="">
      <ContentHeader
        title="Quản lý khách hàng"
        titleCreate="Thêm khách hàng"
        handleModalCreate={handleModalUpdate}
        handleModalExport={handleModalExport}
      />
      <div className="mx-5 mt-4">
        <SearchCustomerFrom />
      </div>
      <div className="mx-5 mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <ListCustomer
            customerList={customerList}
            handleDelete={handleDelete}
          />
          <div className="flex justify-end p-3">
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </div>
      </div>
      <ModalExportFile
        showModalExport={showModalExport}
        handleCloseModalExport={handleCloseModalExport}
      />
    </div>
  );
}
