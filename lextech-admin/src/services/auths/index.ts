import { API } from "../../config";

export const LoginApi = async (data: { email: string; password: string }) => {
  const response = await API.post("/admin/login", data);
  return response?.data;
};
