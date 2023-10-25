import http from "./http";

const getList = async () => {
  const getData = await http.get("/users");
  return getData;
};

const UserService = {
  getList,
};

export default UserService;
