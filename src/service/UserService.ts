import User from "@/types/User";
import http from "./http";

const getList = async () => {
  const getData = await http.get("/users");
  return getData;
};

const createUser = async (param: User) => {
  const { data } = await http.post("/create/user", param);
  return data;
};

const deleteUser = async (id: number) => {
  const { data } = await http.delete(`/delete/user/${id}`);
  return data;
};

const updateUser = async (param: Partial<User>, id: number) => {
  const { data } = await http.patch(`/update/user/${id}`, param);
  return data;
};

const UserService = {
  getList,
  createUser,
  deleteUser,
  updateUser,
};

export default UserService;
