import { useForm } from "react-hook-form";
import SearchUser from "../types";

type Props = {
  handleSearch: Function;
  handleReset: Function;
};

export default function SearchUserFrom({ handleSearch, handleReset }: Props) {
  const { register, handleSubmit, reset } = useForm<SearchUser>();

  const onSubmit = (data: SearchUser) => {
    if (handleSearch) {
      handleSearch(data);
    }
  };

  const handleResetForm = () => {
    reset({ value: "" });
    handleReset();
  };

  return (
    <section className="bg-white rounded-lg">
      <div className=" mx-5 lg:py-4">
        <h2 className="mb-3 text-xl font-bold text-gray-600">
          Tìm kiếm nhân viên
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid">
            <label
              htmlFor="item-weight"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Số điện thoại
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
              placeholder="VD: 0123456789,..."
              {...register("value")}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-1"
              onClick={handleResetForm}
            >
              Reset
            </button>
            <button
              type="submit"
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-1"
            >
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
