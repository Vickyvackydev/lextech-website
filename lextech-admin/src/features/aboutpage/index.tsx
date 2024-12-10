import React, { FormEvent, useEffect, useRef, useState } from "react";
import { DashboardLayout } from "../../Layout";
// import UploadSegMent from "../../components/uploadsegment";
import { fakedata } from "../../constants";
import Preloader from "../../components/preloader";
import Modal from "../../components/modal";
import Button from "../../components/button";
import FormField from "../../components/FormField";
import { FaCheckCircle } from "react-icons/fa";
import {
  AddSolutionApi,
  deleteSolution,
  EditSolutionApi,
  GetSolutionApi,
} from "../../services";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { PulseLoader } from "react-spinners";
import AboutUpload from "../../components/uploadsegment/components/AboutUpload";
import LeadersUpload from "../../components/uploadsegment/leadersupload";
import { getUploadDate } from "../../utils";

interface SelectedType {
  id: string | number;
  title: string;
  body: string;
  image: string | null;
}
function AboutPage() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [loader, setLoader] = useState(true);
  const [creating, setCreating] = useState(false);
  const [selected, setSelected] = useState<SelectedType | null>(null);
  const [solutionModal, setSolutionModal] = useState(false);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [formdata, setFormData] = useState({
    title: selected?.title ?? "",
    body: selected?.title ?? "",
  });
  const [selectedId, setSelectedId] = useState<string | number>("");
  const fileInputRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { data: solutions, refetch } = useQuery("solution", GetSolutionApi);

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
      setImage(file);
      setPreviewImg(URL.createObjectURL(file));
      setSolutionModal(true);
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
  const isValid = formdata.body !== "" && formdata.title !== "";

  const handleCreateSolution = async (e: FormEvent, id: string | number) => {
    e.preventDefault();
    setCreating(true);
    const formData = new FormData();
    formData.append("title", formdata.title);
    formData.append("body", formdata.body);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = id
        ? await EditSolutionApi(formData, id)
        : await AddSolutionApi(formData);
      if (response) {
        toast.success(
          id ? "Solution has being updated" : "Solution has being added"
        );
        setSolutionModal(false);
        setImage(null);
        setFormData({
          title: "",
          body: "",
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
      const response = await deleteSolution(id);
      if (response) {
        toast.success("Solution has being deleted");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
      refetch();
    }
  };
  useEffect(() => {
    const loader = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(loader);
  }, []);

  useEffect(() => {
    if (selected) {
      setFormData({
        title: selected.title || "",
        body: selected.body || "",
      });
    }
  }, [selected]);

  return (
    <DashboardLayout>
      {loader ? (
        <Preloader />
      ) : (
        <>
          <div className="flex flex-col gap-y-7">
            <div className="w-full h-[312px] bg-white px-7 py-5 flex flex-col gap-5 rounded">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0D0769] text-[21px]">
                  Our Solution
                </span>
                <Button
                  title="Upload"
                  icon="/icons/plus-icon.svg"
                  textStyle="text-white text-[14px]"
                  handleClick={() => {
                    setSolutionModal(true);
                    setSelected(null);
                    setFormData({ title: "", body: "" });
                  }}
                  btnStyles="flex flex-row-reverse items-center py-2 px-2 gap-1 rounded-lg bg-[#46A4FF] border border-white w-fit h-fit"
                />
              </div>
              <div className="w-full flex justify-center items-center flex-col border-dotted border h-[192px]">
                <div
                  onClick={() => fileInputRef?.current?.click()}
                  className="cursor-pointer flex flex-col justify-center items-center"
                >
                  <img
                    src="/icons/upload.svg"
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
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
                // @ts-ignore
                ref={fileInputRef}
                accept=".png"
                onChange={handleImageChange}
                className="sr-only"
              />
            </div>
            <div className="mt-8 flex flex-col gap-4 w-full">
              {solutions?.length > 0 &&
                solutions !== undefined &&
                solutions?.map(
                  (item: {
                    id: string | number;
                    title: string;
                    image: string;
                    body: string;
                    created_at: string;
                  }) => (
                    <div
                      key={item?.id}
                      className="w-full grid grid-cols-12 items-center px-3 py-2 h-[76px] border border-[#EAECF0] bg-[#F7FAFC] rounded-md"
                    >
                      <div className="col-span-2">
                        <img
                          src={item?.image}
                          className="w-[86.82px] h-[53px] rounded-md object-contain"
                          alt=""
                        />
                      </div>

                      <div className="col-span-5">
                        <span className="text-[16px] font-medium">
                          {item?.title}
                        </span>
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
                                    setSolutionModal(true);
                                    setSelected(item);
                                    setImage(null);
                                  }}
                                  className="rounded-lg w-full py-2 px-3 transition hover:bg-[#EDF2F7]"
                                  href="#"
                                >
                                  <p className="font-semibold text-gray-500">
                                    Edit
                                  </p>
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
            <Modal
              isOpen={solutionModal}
              isClose={() => setSolutionModal(false)}
            >
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
                            <button className="text-semibold text-sm text-[#6C757D]">
                              View
                            </button>
                            <button className="text-semibold text-sm text-[#6C757D]">
                              Upload another
                            </button>
                            <button className="text-semibold text-sm text-[#6C757D]">
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
                          Upload Solution picture
                        </label>
                        <div className="border border-gray-300 rounded-xl p-2">
                          {selected?.image && !image && (
                            <img
                              src={selected?.image}
                              className="w-[100px] h-[100px] object-contain"
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

                    {/* Solution Name */}
                    <div className="flex flex-col gap-y-2">
                      <label
                        htmlFor="solutionName"
                        className="text-gray-600 font-medium"
                      >
                        Title
                      </label>

                      <input
                        type="text"
                        name="title"
                        value={formdata.title}
                        className="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-3 w-full"
                        placeholder="Enter title"
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* subHeader Text */}
                    <div className="flex flex-col gap-y-2">
                      <label
                        htmlFor="summary"
                        className="text-gray-600 font-medium"
                      >
                        Body
                      </label>

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
                        !isValid || creating
                          ? "bg-opacity-50"
                          : "bg-opacity-100"
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
          </div>
          <div className="mt-8">
            <LeadersUpload />
          </div>
        </>
      )}
    </DashboardLayout>
  );
}

export default AboutPage;
