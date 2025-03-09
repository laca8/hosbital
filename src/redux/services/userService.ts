import axios from "axios";
const API_URL = "/api/user";
import { user } from "../../type";
const createUser = async (row: user): Promise<object> => {
  const response = await axios.post(`${API_URL}/add`, row);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return await response.data;
};
const loginUser = async (row: user): Promise<object> => {
  const response = await axios.post(`${API_URL}/login`, row);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return await response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};
const reportService = {
  createUser,
  logout,
  loginUser,
};
export default reportService;
