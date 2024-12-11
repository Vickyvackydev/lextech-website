import React, { useState, useRef, FormEvent, useEffect } from "react";
import Button from "../../button";
import { toast } from "react-toastify";
import {
  AddLeadersApi,
  deleteLeader,
  EditLeaderApi,
  GetLeadersApi,
} from "../../../services";
import { useQuery } from "react-query";
import { PulseLoader } from "react-spinners";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Modal from "../../modal";
import { FaCheckCircle } from "react-icons/fa";
import FormField from "../../FormField";
import { getRandomColors, getUploadDate } from "../../../utils";

interface SelectedType {
  id: string | number;
  name: string;
  body: string;
  position: string;
  image: string | null;
}
function LeadersUpload() {
  const [viewModal, setViewModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | number>("");
  const [selected, setSelected] = useState<SelectedType | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [modal, setModal] = useState(false);
  const flleInputRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [creating, setCreating] = useState(false);
  const { data: leaders, refetch } = useQuery("leaders", GetLeadersApi);
  const [formdata, setFormData] = useState({
    name: selected?.name ?? "",
    role: selected?.position ?? "",
    body: selected?.body ?? "",
  });
  const backgroundColor = getRandomColors();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const sizeInKB = file.size / 1024;
      const sizeInMB = sizeInKB / 1024;
      const formattedSize =
        sizeInMB >= 1
          ? `${sizeInMB.toFixed(2)} MB`
          : `${sizeInKB.toFixed(2)} KB`;
      // @ts-ignore
      setImage({ name: file.name, type: file.type, size: formattedSize });
      setPreviewImg(URL.createObjectURL(file));
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
    formdata.body !== "" && formdata.name !== "" && formdata.body !== "";

  const handleCreateSolution = async (e: FormEvent, id: string | number) => {
    e.preventDefault();
    setCreating(true);
    const formData = new FormData();
    formData.append("name", formdata.name);
    formData.append("position", formdata.role);
    formData.append("body", formdata.body);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = id
        ? await EditLeaderApi(formData, id)
        : await AddLeadersApi(formData);
      if (response) {
        toast.success("Solution has being added");
        setModal(false);
        setImage(null);
        setFormData({
          name: "",
          body: "",
          role: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setCreating(false);
      refetch();
    }
  };

  const handleDeleteSolution = async (id: string | number) => {
    setIsDeleting(true);
    setSelectedId(id);
    try {
      const response = await deleteLeader(id);
      if (response) {
        toast.success("Ledaer has being deleted");
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
        name: selected.name || "",
        role: selected?.position,
        body: selected.body || "",
      });
    }
  }, [selected]);

  return (
    <div className="flex flex-col gap-y-7">
      <div className="w-full h-[312px] bg-white px-7 py-5 flex flex-col gap-5 rounded">
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#0D0769] text-[21px]">
            Mind Behind LexTech
          </span>
          <Button
            title="Upload"
            icon="/icons/plus-icon.svg"
            textStyle="text-white text-[14px]"
            handleClick={() => {
              setModal(true);
            }}
            btnStyles="flex flex-row-reverse items-center py-2 px-2 gap-1 rounded-lg bg-[#46A4FF] border border-white w-fit h-fit"
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col border-dotted border h-[192px]">
          <div
            onClick={() => flleInputRef?.current?.click()}
            className="cursor-pointer flex flex-col justify-center items-center"
          >
            <img src="/icons/upload.svg" alt="" className="w-[40px] h-[40px]" />
            <div>
              <span className="font-semibold text-[#11502F] text-[14px]">
                Click to upload
              </span>{" "}
              <span className="text-[#667085] font-normal text-[14px] ">
                Example receipt.png
              </span>
            </div>
            <span className="text-[#667085] font-normal text-[12px] ">
              PNG (max. 5mb)
            </span>
          </div>
        </div>

        <input
          type="file"
          //   @ts-ignore
          ref={flleInputRef}
          accept=".png"
          onChange={handleImageChange}
          className="sr-only"
        />
      </div>
      <div className="mt-8 flex flex-col gap-4 w-full">
        {leaders?.length > 0 &&
          leaders !== undefined &&
          leaders?.map(
            (item: {
              id: string | number;
              name: string;
              image: string;
              body: string;
              position: string;
              created_at: string;
            }) => (
              <div
                key={item?.id}
                className="w-full grid grid-cols-12 items-center px-3 py-2 h-[76px] border border-[#EAECF0] bg-[#F7FAFC] rounded-md"
              >
                <div className="col-span-2 ">
                  <img
                    src={item.image}
                    className="w-[86.82px] h-[53px] rounded-md object-contain"
                    alt=""
                  />
                </div>

                <div className="col-span-5">
                  <span className="text-[16px] font-medium">{item.name}</span>
                </div>

                <div className="col-span-3">
                  <span className="text-gray-500">
                    {getUploadDate(item?.created_at)}
                  </span>
                </div>

                <div className="col-span-2 flex justify-end">
                  {isDeleting && selectedId === item?.id ? (
                    <PulseLoader size={10} color="red" />
                  ) : (
                    <Popover className={""}>
                      <PopoverButton className="flex text-sm/6 font-semibold hover:bg-[#EDF2F7] w-[30px] h-[30px] rounded-full items-center justify-center focus:outline-none">
                        <Button
                          title=""
                          icon="/icons/dots.svg"
                          iconStyle="w-[26.71px] h-[24px]"
                          btnStyles="flex justify-end items-center"
                          handleClick={() => {}}
                          textStyle=""
                        />
                      </PopoverButton>
                      <PopoverPanel
                        transition
                        anchor="bottom"
                        className="divide-y divide-white rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out shadow-lg [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                      >
                        <div className="p-3 flex items-center justify-center flex-col gap-y-2 w-full">
                          <a
                            onClick={() => {
                              setSelected(item);
                              setModal(true);
                            }}
                            className="rounded-lg w-full py-2 px-3 transition hover:bg-[#EDF2F7]"
                            href="#"
                          >
                            <p className="font-semibold text-gray-500">Edit</p>
                          </a>
                          <a
                            onClick={() => handleDeleteSolution(item?.id)}
                            className="rounded-lg w-full py-2 px-3 transition hover:bg-[#EDF2F7]"
                            href="#"
                          >
                            <p className="font-semibold text-gray-500">
                              Delete
                            </p>
                          </a>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  )}
                </div>
              </div>
            )
          )}
      </div>

      {/* Modal Section */}
      <Modal isOpen={modal} isClose={() => setModal(false)} width="1000px">
        <div>
          <span className="text-[20px] font-medium">Our Solution</span>
          <form
            className="w-full mt-11"
            onSubmit={(e) => handleCreateSolution(e, selected?.id!)}
          >
            <div className="w-full flex flex-col space-y-4">
              {/* File Upload */}
              {image ? (
                <div className="w-full gap-x-4 p-3 border border-[#E4E4E7] rounded-xl flex items-start">
                  <img src="./assets/file_upload_icon.svg" alt="" />
                  <div className="w-full">
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-y-1">
                        {loading ? (
                          <div className="w-[100px] h-[15px] rounded-lg bg-gray-300 animate-pulse"></div>
                        ) : (
                          <span>{image.name}</span>
                        )}
                        <span className="text-sm font-normal text-[#667085]">
                          PNG (max. 5 MB)
                        </span>
                      </div>
                      {loading ? (
                        <div className="border-[4px] h-5 w-5 border-gray-200 border-t-gray-400 rounded-full animate-spin"></div>
                      ) : (
                        <FaCheckCircle color="#08043F" size={16} />
                      )}
                    </div>

                    <div className="flex items-center gap-x-3">
                      <div className="w-full bg-gray-300 rounded-lg h-[8px] relative">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#08043F] rounded-lg"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>

                      <span>{progress}%</span>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <button
                        className="text-semibold text-sm text-[#6C757D]"
                        onClick={(e) => {
                          e.preventDefault();
                          flleInputRef?.current?.click();
                        }}
                      >
                        Upload another
                      </button>
                      <button
                        type="button"
                        onClick={() => setImage(null)}
                        className="text-semibold text-sm text-[#6C757D]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <label
                    htmlFor="file-upload"
                    className="text-gray-600 font-medium"
                  >
                    Upload Leader Picture
                  </label>
                  <div className="border border-gray-300 rounded-xl p-2">
                    {selected?.image && !image && (
                      <img
                        src={selected?.image}
                        className="w-[100px] h-[100px] object-contain mb-4"
                        alt=""
                      />
                    )}
                    <input
                      type="file"
                      id="file-upload"
                      accept=".png"
                      onChange={handleImageChange}
                      className=""
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="solutionName"
                  className="text-gray-600 font-medium"
                >
                  Name
                </label>
                {/* <FormField
                  type="text"
                  name="name"
                  formFieldType="input"
                  value={formdata.name}
                  title="Header Text"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-3 w-full"
                  placeholder="Enter title"
                  placeholderstyle=""
                  handleChange={handleInputChange}
                /> */}
                <input
                  type="text"
                  name="name"
                  value={formdata.name}
                  className="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-3 w-full"
                  placeholder="Enter name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="solutionName"
                  className="text-gray-600 font-medium"
                >
                  Role
                </label>
                {/* <FormField
                  type="text"
                  name="role"
                  formFieldType="input"
                  value={formdata.role}
                  title="Header Text"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-3 w-full"
                  placeholder="Enter leader role"
                  placeholderstyle=""
                  handleChange={handleInputChange}
                /> */}
                <input
                  type="text"
                  name="role"
                  value={formdata.role}
                  className="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-3 w-full"
                  placeholder="Enter leader role"
                  onChange={handleInputChange}
                />
              </div>

              {/* subHeader Text */}
              <div className="flex flex-col gap-y-2">
                <label htmlFor="summary" className="text-gray-600 font-medium">
                  Body
                </label>
                {/* <FormField
                  type="text"
                  name="body"
                  formFieldType="textarea"
                  value={formdata.body}
                  title="Solution Summary"
                  inputstyle="border border-gray-300 resize-none rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full"
                  placeholder="Enter text"
                  placeholderstyle=""
                  handleChange={handleInputChange}
                /> */}
                <textarea
                  name="body"
                  value={formdata.body}
                  className="border border-gray-300 resize-none rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full"
                  id=""
                  onChange={handleInputChange}
                  placeholder="Enter text"
                  rows={5}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-btns flex flex-row gap-2 mt-4">
              <button
                type="submit"
                disabled={!isValid || creating}
                className={`py-2 px-9 ${
                  !isValid || creating ? "bg-opacity-50" : "bg-opacity-100"
                } bg-[#4763E4] text-white text-[14px] rounded-xl`}
              >
                {creating ? "Updating" : "Update"}
              </button>
              <button
                type="button"
                // onClick={() => setOpen(false)}
                className="py-2 px-9 bg-[#E0E0E0] text-black text-[14px] rounded-xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={viewModal}
        isClose={() => setViewModal(false)}
        width="400px"
      >
        <div className="w-full flex items-center justify-center">
          <div>
            {previewImg && (
              <img
                src={previewImg}
                className="w-full h-[300px] object-contain"
                alt=""
              />
            )}
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col gap-y-2">
                <span>File name:</span>
                <span>File type:</span>
                <span>File size:</span>
              </div>
              <div className="flex flex-col gap-y-2">
                <span>{image?.name}</span>
                <span>{image?.type}</span>
                <span>{image?.size}</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LeadersUpload;
