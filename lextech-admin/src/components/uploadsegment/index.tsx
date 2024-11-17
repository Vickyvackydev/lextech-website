import React, { useState } from "react";
import { UploadSegMentTypes } from "../../types";
import Button from "../button";
import Modal from "../modal";
import FormField from "../FormField";

function UploadSegMent(props: UploadSegMentTypes) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("");
  return (
    <main className="w-full">
      <div className="w-full h-[312px] bg-white  px-7 py-5 flex flex-col gap-5 rounded">
        <div className="flex  items-center justify-between">
          <span className="font-bold text-[#0D0769] text-[21px]">{`${props.title}`}</span>
          <Button
            title="Add Hero"
            icon="/icons/plus-icon.svg"
            textStyle="text-white text-[14px]"
            handleClick={() => {
              setOpen(true);
              setSection(props.title);
            }}
            btnStyles="flex flex-row-reverse items-center py-2 px-2 gap-1 rounded-lg  bg-[#46A4FF] border border-white w-fit h-fit"
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
        {props.data.map((item: any) => (
          <div className="w-full flex justify-between items-center px-3 py-2 h-[76px] border border-[#EAECF0] bg-[#F7FAFC] rounded-md">
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
      <Modal isOpen={open} isClose={() => setOpen(false)}>
        <div>
          <span className="text-[20px] font-medium">{section}</span>
          <form action="" className="w-full mt-11">
            <div className="w-full flex items-start gap-x-3 border border-dotted rounded-lg h-[129px] px-3 py-4">
              <img
                src="/icons/featured.svg"
                className="w-[32px] h-[32px]"
                alt=""
              />

              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[#232A35] font-medium text-[14px]">
                      Eprobate
                    </span>
                    <span className="text-[#667085] font-normal text-[14px]">
                      PNG, JPG or PDF (max. 5 MB)
                    </span>
                  </div>
                  <img
                    src="/icons/check.svg"
                    className="w-[16px] h-[16px]"
                    alt=""
                  />
                </div>

                <div className="flex items-center gap-x-3">
                  <div className="w-[800px] h-[8px] bg-[#08043F] rounded-lg"></div>
                  <span>100%</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <Button
                    title="View"
                    icon=""
                    btnStyles="w-fit"
                    handleClick={() => {}}
                    textStyle="text-[#6C757D] font-semibold text-[14px]"
                  />
                  <Button
                    title="Delete"
                    icon=""
                    btnStyles="w-fit"
                    handleClick={() => {}}
                    textStyle="text-[#6C757D] font-semibold text-[14px]"
                  />
                  <Button
                    title="Upload Another"
                    icon=""
                    btnStyles="w-fit"
                    handleClick={() => {}}
                    textStyle="text-[#6C757D] font-semibold text-[14px]"
                  />
                </div>
              </div>
            </div>
            <FormField
              type={"number"}
              formFieldType={"input"}
              value={""}
              title={""}
              inputstyle={""}
              placeholder={""}
              placeholderstyle={""}
              handleChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </form>
        </div>
      </Modal>
    </main>
  );
}

export default UploadSegMent;
