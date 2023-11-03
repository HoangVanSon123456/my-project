import User from "@/types/User";
import http from "./http";
import { DataListResponse } from "./ApiResponse";
import SearchUser from "@/app/user/types";

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

const getUserById = async (id: number) => {
  const { data } = await http.get(`/user/${id}`);
  return data;
};

const searchUser = async (param: SearchUser) => {
  const { data } = await http.post<DataListResponse<User>>(`/find`, param);
  return data;
};

const UserService = {
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  searchUser,
};

export default UserService;
