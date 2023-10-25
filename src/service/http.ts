import axios from "axios";

const http = axios.create({
  baseURL: "https://65264c93917d673fd76bf8be.mockapi.io",
});

export default http;
