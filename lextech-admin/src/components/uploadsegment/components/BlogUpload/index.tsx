import React, { FormEvent ,useRef, useState, useEffect } from "react";
import { UploadSegMentTypes } from "../../../../types";
import Button from "../../../button";
import Modal from "../../../modal";
import FormField from "../../../FormField";
import { AddBlogApi,deleteLeader,
    EditBlogApi,
    GetAllBlogs, } from "../../../../services";
  
import { useQuery } from "react-query";
import { PulseLoader } from "react-spinners";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";
import { getRandomColors } from "../../../../utils";
import { toast } from "react-toastify";

export interface BlogTypes {
  title: string;
  featured_image: File | null;
  post_content: string;
  tags: Array<string>;
  date_created: string;
  blog_excerpt: string;
}



function UploadSegMent(props: UploadSegMentTypes) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<BlogTypes | null>(null);

  const [section, setSection] = useState("");
  const [tags, setTags] = useState<string[]>(["PROJECT", "SOLUTIONS"]);
  const [tagInput, setTagInput] = useState<string>("");
  const [headerText, setHeaderText] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [creating, setCreating] = useState(false);
  const [modal, setModal] = useState(false);
  const { data: BlogPosts, refetch } = useQuery("BlogPosts", GetAllBlogs);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedId, setSelectedId] = useState<string | number>("");
  const [formdata, setFormData] = useState({
    title: selected?.title ?? "",
    post_content: selected?.post_content ?? "",
    featured_image: selected?.featured_image ?? null,
    tags: selected?.tags ?? [],
    date_created: selected?.date_created ?? "",
    blog_excerpt: selected?.blog_excerpt ?? "",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setModal(true);
      setLoading(true);
      setProgress(0);
      simulateLoading();
    }
  };
  
  const simulateLoading = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 5;
      setProgress(progressValue);

      if (progressValue >= 100) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 500);
  };


  const isValid =
    formdata.title !== "" && formdata.post_content !== "" && formdata.featured_image !== null && formdata.tags.length > 0 && formdata.date_created && formdata.blog_excerpt !== "";
  
    const handleCreateBlogPost = async (e: FormEvent, id: string | number) => {
      e.preventDefault();
      setCreating(true);
      const formData = new FormData();
      formData.append("title", formdata.title);
      formData.append("post_content", formdata.post_content);
      formData.append("date_created", formdata.date_created);
      formData.append("blog_excerpt", formdata.blog_excerpt);
      tags.forEach((tag, index) => {
        formData.append(`tags[${index}]`, tag);
      });
      if (file) {
        formData.append("featured_image", file);
      }
  

      try {
        const response = id
          ? await EditBlogApi(formData, id)
          : await AddBlogApi(formData);
        if (response) {
          toast.success("Solution has being added");
          setModal(false);
          setFile(null);
          setFormData({
            title: "",
            post_content: "",
            featured_image: null,
            tags: [],
            date_created: "",
            blog_excerpt: "",
          });
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setCreating(false);
        refetch();
      }
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file.");
      return;
    }


    const handleDeleteSolution = async (id: string | number) => {
      setIsDeleting(true);
      setSelectedId(id);
      try {
        const response = await deleteLeader(id);
        if (response) {
          toast.success("Blog Post has been deleted");
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsDeleting(false);
        refetch();
      }
    };
  
    useEffect(() => {
      if (selected) {
        setFormData({
          title: selected.title || "",
          post_content: selected?.post_content,
          featured_image:selected?.featured_image ?? null,
          tags: selected?.tags ?? [],
          date_created: selected?.date_created ?? "",
          blog_excerpt: selected?.blog_excerpt ?? "",
        });
      }
    }, [selected]);

    // Mock form submission
    const formData = new FormData();
    formData.append("section", section);
    formData.append("tags", JSON.stringify(tags));
    formData.append("headerText", headerText);
    formData.append("bodyText", bodyText);
    formData.append("file", file);

    // console.log("Form Submitted:", {
    //   section,
    //   tags,
    //   headerText,
    //   bodyText,
    //   file: file.name,
    // });

    // // Example API call
    // // axios.post('/upload-endpoint', formData)
    // //   .then(response => console.log('Success:', response))
    // //   .catch(error => console.error('Error:', error));

    alert("Form submitted successfully.");
    setOpen(false); // Close modal
  };

  return (
    <main className="w-full">
      <div className="w-full h-[312px] bg-white px-7 py-5 flex flex-col gap-5 rounded">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#0D0769] text-[21px]">
            {props.title}
          </span>
          <Button
            title="Add Hero"
            icon="/icons/plus-icon.svg"
            textStyle="text-white text-[14px]"
            handleClick={() => {
              setOpen(true);
              setSection(props.title);
            }}
            btnStyles="flex flex-row-reverse items-center py-2 px-2 gap-1 rounded-lg bg-[#46A4FF] border border-white w-fit h-fit"
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col border-dotted border h-[192px]">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer flex flex-col justify-center items-center"
          >
            <img src="/icons/upload.svg" alt="" className="w-[40px] h-[40px]" />
            <div>
              <span className="font-semibold text-[#11502F] text-[14px]">
                Click to upload
              </span>{" "}
              <span className="text-[#667085] font-normal text-[14px] ">
                Example receipt.jpg
              </span>
            </div>
            <span className="text-[#667085] font-normal text-[12px] ">
              PNG, JPG OR PDF (max. 5mb)
            </span>
          </div>
          <input
            // @ts-ignore
            ref={fileInputRef}
            type="file"
            accept="/image*"
            onChange={handleFileChange}
            className="sr-only"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 w-full">
        {BlogPosts?.length > 0 &&
          BlogPosts !== undefined &&
          BlogPosts?.map(
            (item: {
              id: string | number;
              title: string;
              post_content: string;
              featured_image: string;
              tags: string[];
              date_created: string;
              blog_excerpt: string;
            }) => (
          <div
            key={item?.id}
            className="w-full flex justify-between items-center px-3 py-2 h-[76px] border border-[#EAECF0] bg-[#F7FAFC] rounded-md"
          >
            <img
              src={item.featured_image}
              className="w-[86.82px] h-[53px] rounded-md"
              alt=""
            />
             <div className="col-span-5">
                  <span className="text-[16px] font-medium">{item.title}</span>
                </div>
                <div className="col-span-3">
                  <span className="text-gray-500">Uploaded 2 days ago</span>
                </div>
            <Button
              title=""
              icon="/icons/dots.svg"
              iconStyle="w-[26.71px] h-[24px]"
              btnStyles="flex justify-end items-center"
              handleClick={() => {}}
              textStyle=""
            />
          </div>
        ))}
      </div>

      {/* Modal Section */}
      <Modal isOpen={open} isClose={() => setOpen(false)}>
        <div>
          <span className="text-[20px] font-medium">{section}</span>
          <form onSubmit={handleSubmit} className="w-full mt-11">
            <div className="w-full flex flex-col space-y-4">
              {/* File Upload */}
              <div className="flex flex-col">
                <label
                  htmlFor="file-upload"
                  className="text-gray-600 font-medium"
                >
                  Upload File
                </label>
                <input
                  type="file"
                  id="file-upload"
                  accept=".png,.jpg,.pdf"
                  onChange={handleFileChange}
                  className="border border-gray-300 rounded-xl p-2"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-col">
                <label htmlFor="tags" className="text-gray-600 font-medium">
                  Tags
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    className="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2"
                  />
                </div>
              </div>

              {/* Header Text */}
              <div className="flex flex-col">
                <label
                  htmlFor="headertext"
                  className="text-gray-600 font-medium"
                >
                  Header Text
                </label>
                <FormField
                  type="text"
                  formFieldType="input"
                  value={headerText}
                  title="Header Text"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full"
                  placeholder="Enter header text"
                  placeholderstyle=""
                  handleChange={(e) => setHeaderText(e.target.value)}
                />
              </div>

              {/* Body Text */}
              <div className="flex flex-col">
                <label
                  htmlFor="headertext"
                  className="text-gray-600 font-medium"
                >
                  Body Text
                </label>
                <FormField
                  type="text"
                  formFieldType="textarea"
                  value={bodyText}
                  title="Body Text"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full h-32"
                  placeholder="Enter body text"
                  placeholderstyle=""
                  handleChange={(e) => setBodyText(e.target.value)}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-btns flex flex-row gap-2 mt-4">
              <button
                type="submit"
                className="py-2 px-9 bg-[#4763E4] text-white text-[14px] rounded-xl"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="py-2 px-9 bg-[#E0E0E0] text-black text-[14px] rounded-xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
}

export default UploadSegMent;
