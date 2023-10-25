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
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Tên tài khoản
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="Tên tài khoản"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Địa chỉ
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                placeholder="VD: số nhà, phường, xã, tỉnh"
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
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
          </div>
        </form>
      </div>
    </section>
  );
}
