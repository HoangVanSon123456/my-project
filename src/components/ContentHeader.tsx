import React from "react";

type Props = {
  title: string;
  titleCreate: string;
  handleModalExport: Function;
  handleModalCreate: Function;
};

export default function ContentHeader({
  title,
  titleCreate,
  handleModalExport,
  handleModalCreate,
}: Props) {
  return (
    <div className="flex flex-row mx-5 mt-5 justify-between">
      <div className="items-start">
        <span className="font-bold text-3xl">{title}</span>
      </div>
      <div className="items-end">
        <button
          type="button"
          onClick={() => handleModalCreate()}
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          {titleCreate}
        </button>
        <button
          type="button"
          className="text-gray-700 hover:text-white border border-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => handleModalExport()}
        >
          Xuất tài liệu
        </button>
      </div>
    </div>
  );
}
