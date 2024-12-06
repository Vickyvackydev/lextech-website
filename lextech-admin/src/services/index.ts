import { API } from "../config";

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
