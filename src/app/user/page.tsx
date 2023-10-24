"use client";
import React, { useEffect, useState } from "react";
import ModalUserUpdate from "./components/ModalUserUpdate";
import UserService from "@/service/UserService";
import User from "@/types/User";
import ModalExportFile from "@/components/ModalExportFile";

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
        <section className="bg-white rounded-lg">
          <div className=" mx-5 lg:py-4">
            <h2 className="mb-3 text-xl font-bold text-gray-600">
              Tìm kiếm nhân viên
            </h2>
            <form action="#">
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                    placeholder="Type product name"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                    placeholder="Product brand"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="$2999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option>Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="item-weight"
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Item Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="item-weight"
                    id="item-weight"
                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 "
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="mx-5 mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-600 ">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  UserName
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr className="bg-white border-b">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap dark:text-white"
                  >
                    {user.userName}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.address}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav
            className="flex items-center justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-600 dark:text-white">
                1-10
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-600 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-600 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-600 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
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
