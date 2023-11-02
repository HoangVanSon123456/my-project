import User from "@/types/User";
import http from "./http";
import { DataListResponse } from "./ApiResponse";

const getList = async (currentPage: number) => {
  const getData = await http.get<DataListResponse<User>>(
    `/users?page=${currentPage}`
  );
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

const getUserById = async (id: number) => {
  const { data } = await http.get(`/user/${id}`);
  return data;
};

const searchUser = async (keyword: string) => {
  const { data } = await http.get(`/search/user?search=${keyword}`);
  return data;
};

const UserService = {
  getList,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  searchUser,
};

export default UserService;
