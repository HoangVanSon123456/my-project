import User, { Status } from "@/types/User";
import { getFieldHtml } from "@/utils/common";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DetailsOutlinedIcon from "@mui/icons-material/DetailsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

type Props = {
  userList: User[];
  handleDelete: Function;
  handleUpdate: Function;
  handleDetail: Function;
};

export default function ListUser({
  userList,
  handleDelete,
  handleUpdate,
  handleDetail,
}: Props) {
  const handleEditItem = (id: number) => {
    if (handleUpdate) handleUpdate(id);
  };

  const handleDetailItem = async (id: number) => {
    if (handleDetail) handleDetail(id);
  };
  return (
    <>
      <table className="w-full text-sm text-left text-gray-600 ">
        <thead className="text-xs text-gray-600 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="p-4">
              STT
            </th>
            <th scope="col" className="px-6 py-3">
              Họ và tên
            </th>
            <th scope="col" className="px-6 py-3">
              Tên tài khoản
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
            <th scope="col" className="px-6 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user: User, index: number) => (
            <tr className="bg-white border-b" key={user.id}>
              <td className="w-4 p-4">{index + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap"
              >
                {user.fullName}
              </th>
              <td className="px-6 py-4">{user.userName}</td>

              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">
                {getFieldHtml(Status, user.status!)}
              </td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4 text-left">
                <button onClick={() => handleEditItem(user.id!)}>
                  <EditOutlinedIcon sx={{ color: "#2E34E6" }} />
                </button>
                <button onClick={() => handleDelete(user.id)}>
                  <DeleteOutlinedIcon
                    sx={{ color: "#E62E2E", marginX: "5px" }}
                  />
                </button>
                <button onClick={() => handleDetailItem(user.id!)}>
                  <DetailsOutlinedIcon sx={{ color: "#D6D449" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
