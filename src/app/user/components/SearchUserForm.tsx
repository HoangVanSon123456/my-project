import React from "react";

type Props = {};

export default function SearchUserFrom({}: Props) {
  return (
    <section className="bg-white rounded-lg">
      <div className=" mx-5 lg:py-4">
        <h2 className="mb-3 text-xl font-bold text-gray-600">
          Tìm kiếm nhân viên
        </h2>
        <form action="#">
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Họ và tên
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: Hoàng Văn Sơn"
              />
            </div>
            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                name="item-weight"
                id="item-weight"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="VD: 0123456789,..."
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: hoangvanson@gmail.com,..."
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Trạng thái
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              >
                <option value="1">Đang hoạt động</option>
                <option value="2">Không hoạt động</option>
                <option value="3">Khóa tài khoản</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-2"
            >
              Reset
            </button>
            <button
              type="button"
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
