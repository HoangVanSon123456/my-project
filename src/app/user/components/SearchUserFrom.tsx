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
  );
}
