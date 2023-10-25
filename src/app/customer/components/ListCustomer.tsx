import Customer from "@/types/Customer";
import React from "react";

type Props = { customerList: Customer[]; handleDelete: Function };

export default function ListCustomer({ customerList, handleDelete }: Props) {
  return (
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
            Tên tài khoản
          </th>
          <th scope="col" className="px-6 py-3">
            Địa chỉ
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Trạng thái
          </th>
          <th scope="col" className="px-6 py-3">
            Số điện thoại
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {customerList.map((customer) => (
          <tr className="bg-white border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            {/* <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
            >
              {customer.userName}
            </th>
            <td className="px-6 py-4">{customer.address}</td>
            <td className="px-6 py-4">{customer.email}</td>
            <td className="px-6 py-4">{getFieldHtml(Statuses, user.status)}</td>
            <td className="px-6 py-4">{customer.phone}</td> */}
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600  hover:underline"
              >
                Sửa
              </a>
              <a
                href="#"
                className="font-medium mx-3 text-red-600 hover:underline"
                // onClick={() => handleDelete(user.id!)}
              >
                Xóa
              </a>
              <a
                href="#"
                className="font-medium mr-3 text-yellow-300 hover:underline"
              >
                Chi tiết
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
