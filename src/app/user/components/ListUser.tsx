import User from "@/types/User";
import React from "react";

type Props = { userList: User[] };

export default function ListUser({ userList }: Props) {
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
                <label htmlFor="checkbox-table-search-1" className="sr-only">
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
  );
}
