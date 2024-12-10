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
export const AddBlogApi = async (data: FormData) => {
  const response = await API.post("admin/post", data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};

export const EditBlogApi = async (data: FormData, id: string | number) => {
  const response = await API.post("admin/post", data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};

export const AddSolutionApi = async (data: FormData) => {
  const response = await API.post("admin/solution", data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};
export const EditSolutionApi = async (data: FormData, id: string | number) => {
  const response = await API.post(`/admin/solution/${id}/update`, data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};
export const EditPostApi = async (data: FormData, id: string | number) => {
  const response = await API.post(`/admin/post/${id}/update`, data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};
export const EditLeaderApi = async (data: FormData, id: string | number) => {
  const response = await API.post(`/admin/leader/${id}/update`, data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};
export const AddLeadersApi = async (data: FormData) => {
  const response = await API.post("/admin/leader", data, {
    headers: { "Content-Type": "multipart/formdata" },
  });
  return response?.data;
};
export const GetSolutionApi = async () => {
  const response = await API.get("admin/solution");
  return response?.data?.data;
};
export const GetLeadersApi = async () => {
  const response = await API.get("admin/leader");
  return response?.data?.data;
};

export const deleteSolution = async (id: string | number) => {
  const response = await API.delete(`admin/solution/${id}`);
  return response?.data;
};
export const deleteLeader = async (id: string | number) => {
  const response = await API.delete(`admin/leader/${id}`);
  return response?.data;
};
export const deletePost = async (id: string | number) => {
  const response = await API.delete(`admin/post/${id}`);
  return response?.data;
};
export const GetAllBlogs = async () => {
  const response = await API.get(`/blog`);
  return response?.data?.data;
};
