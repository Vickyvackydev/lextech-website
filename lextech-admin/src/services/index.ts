import { API } from "../config";
import { BlogTypes } from "../types";

export const AllContactApi = async () => {
  const response = await API.get("admin/contact");
  return response?.data?.data;
};
export const AllEnquiryApi = async (inquiryType: string) => {
  const response = await API.get(`/admin/contact?inquiryType=${inquiryType}`);
  return response?.data?.data;
};
export const deleteContact = async (id: string | number) => {
  const response = await API.delete(`admin/contact/${id}`);
  return response?.data;
};
export const AddBlogApi = async (data: BlogTypes | FormData) => {
  const response = await API.post("admin/post", data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};
