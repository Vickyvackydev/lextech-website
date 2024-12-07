import { API } from "../config";
import { ContactInquiryType } from "./type";

export const ContactInquiryApi = async (data: ContactInquiryType) => {
  const response = await API.post("/contact", data);
  return response?.data;
};
export const GetLeadersApi = async () => {
  const response = await API.get("admin/leader");
  return response?.data?.data;
};
