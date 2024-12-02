import { API } from "../config";
import { ContactInquiryType } from "./type";

export const ContactInquiryApi = async (data: ContactInquiryType) => {
  const response = await API.post("/contact", data);
  return response?.data;
};
