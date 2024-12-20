import React, { useState } from "react";
import { UploadSegMentTypes } from "../../../../types";
import Button from "../../../button";
import Modal from "../../../modal";
import FormField from "../../../FormField";

function ProjectUpload(props: UploadSegMentTypes) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");
  const [tagInput, setTagInput] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productSubHeader, setProductSubHeader] = useState<string>("");
  const [productInfo, setProductInfo] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    // Mock form submission
    const formData = new FormData();
    formData.append("section", section);
    formData.append("tagInput", tagInput);
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("productSubHeader", productSubHeader);
    formData.append("productInfo", productInfo);
    formData.append("file", file);

    console.log("Form Submitted:", {
      section,
      tagInput,
      productName,
      productDescription,
      productSubHeader,
      productInfo,
      bodyText,
      file: file.name,
    });

    // Example API call
    // axios.post('/upload-endpoint', formData)
    //   .then(response => console.log('Success:', response))
    //   .catch(error => console.error('Error:', error));

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
            title="Add Product"
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
          <div className="cursor-pointer flex flex-col justify-center items-center">
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
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 w-full">
        {props.data.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full flex justify-between items-center px-3 py-2 h-[76px] border border-[#EAECF0] bg-[#F7FAFC] rounded-md"
          >
            <img
              src={item.img}
              className="w-[86.82px] h-[53px] rounded-md"
              alt=""
            />
            <span>{item.image_name}</span>
            <span>Uploaded 2 days ago</span>
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

              {/* Product Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="productName"
                  className="text-gray-600 font-medium"
                >
                  Product Name
                </label>
                <FormField
                  type="text"
                  formFieldType="input"
                  value={productName}
                  title=" Product Name"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full"
                  placeholder="Enter header text"
                  placeholderstyle=""
                  handleChange={() => {}}
                />
              </div>

              {/* subHeader Text */}
              <div className="flex flex-col">
                <label
                  htmlFor="productDescription"
                  className="text-gray-600 font-medium"
                >
                  Product Description
                </label>
                <FormField
                  type="text"
                  formFieldType="input"
                  value={productDescription}
                  title="Product Description"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full"
                  placeholder="Enter header text"
                  placeholderstyle=""
                  handleChange={() => {}}
                />
              </div>

              {/* Sub-Header Text */}
              <div className="flex flex-col">
                <label
                  htmlFor="productSubHeader"
                  className="text-gray-600 font-medium"
                >
                  Product Sub-Header
                </label>
                <FormField
                  type="text"
                  formFieldType="textarea"
                  value={productSubHeader}
                  title="Product Sub-Header"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full"
                  placeholder="Enter body text"
                  placeholderstyle=""
                  handleChange={() => {}}
                />
              </div>

              {/* Product info*/}
              <div className="flex flex-col">
                <label
                  htmlFor="productInfo"
                  className="text-gray-600 font-medium"
                >
                  Product information
                </label>
                <FormField
                  type="text"
                  formFieldType="textarea"
                  value={productInfo}
                  title="Product Information"
                  inputstyle="border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#5C73DB] focus:border-[#5C73DB] p-2 w-full h-12"
                  placeholder="Enter body text"
                  placeholderstyle=""
                  handleChange={() => {}}
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

export default ProjectUpload;
