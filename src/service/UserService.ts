import http from "./http";

const getList = async () => {
  const getData = await http.get("/user");
  return getData;
};

const UserService = {
  getList,
};

export default UserService;
