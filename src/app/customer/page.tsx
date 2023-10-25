"use client";
import ContentHeader from "@/components/ContentHeader";
import ModalExportFile from "@/components/ModalExportFile";
import React, { useState } from "react";

type Props = {};

export default function CustomerList({}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalExport, setShowModalExport] = useState(false);
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
    <div className="">
      <ContentHeader
        title="Quản lý khách hàng"
        titleCreate="Thêm khách hàng"
        handleModalCreate={handleModalUpdate}
        handleModalExport={handleModalExport}
      />
      <ModalExportFile
        showModalExport={showModalExport}
        handleCloseModalExport={handleCloseModalExport}
      />
    </div>
  );
}
