import React from "react";
import Layout from "../../Layout";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { GetBlogsApi } from "../../services";
import { useSelector } from "react-redux";
import { selectBlog } from "../../state/slices/globalstateReducer";
import moment from "moment";
import { formatBackendText, useClipboard } from "../../utils";
import toast from "react-hot-toast";

function ViewBlog() {
  const { copiedText, copyToClipboard } = useClipboard();
  const getBlog: any = useSelector(selectBlog);

  const handleCopy = async (str: string) => {
    const success = await copyToClipboard(str);
    if (success) {
      toast.success("Link copied to clipboard");
    } else {
      toast.error("Failed to copy to clipboard");
    }
  };

  const textPara = getBlog?.content
    ?.split(".  ")
    .map((para: any) => para + ".");

  return (
    <Layout>
      <div className="flex lg:flex-row flex-col items-start mt-28 px-7 justify-center gap-x-5">
        <div>
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-xs font-medium text-[#1D2A29A6]">
              {` Written by`.toUpperCase()}
            </span>
            <img
              src="/assets/logo-2.png"
              className="w-[40px] h-[40px] rounded-full object-contain"
              alt=""
            />
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#002B31] font-medium">
                LexTech Ecosystem
              </span>
              <span className="text-[#1D2A29A6] font-normal text-xs">
                Our Blog
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-8">
            <div
              className="w-[40px] cursor-pointer h-[40px] rounded flex items-center justify-center bg-[#8A8A7B1A]"
              onClick={() => handleCopy(getBlog?.slug)}
            >
              <img
                src="/icons/copy-clip.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </div>
            <div className="w-[40px] cursor-pointer h-[40px] rounded flex items-center justify-center bg-[#8A8A7B1A]">
              <img
                src="/icons/dot-option.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[905.75px] w-full lg:mt-0 mt-4">
          <div className="flex items-start flex-col gap-y-2">
            <span className="text-[#002B31] font-normal lg:text-[55.78px] text-4xl lg:leading-[60px] leading-tight">
              {getBlog?.title}
            </span>
            <span className="text-[21.14px] font-normal text-[#1D2A29A6]">
              {getBlog?.excerpt}
            </span>
            <span className="text-xs font-medium text-[#002B31]">
              {" "}
              <span className="text-[#1D2A29A6] font-normal">
                {moment(getBlog?.created_at).format("MMM D, YYYY")}
              </span>
            </span>
          </div>
          <div className="lg:my-6 mt-5 ">
            <img
              src={getBlog?.featured_image}
              className="w-full lg:h-[536px] h-full object-contain"
              alt=""
            />
          </div>
          <div>
            {textPara.map((para: any, i: number) => (
              <p
                key={i}
                className=" text-[#002B31D9] whitespace-pre-line lg:w-[735.92px] w-full lg:mt-0 mt-5 break-words font-normal text-[17.3px] mb-6"
              >
                {formatBackendText(para)}
              </p>
            ))}
            {/* <div className="flex flex-col gap-y-4">
              <span className="text-[#002B31] font-normal text-[35.48px] ">
                Moving Venture Forward
              </span>
              <p className=" text-[#002B31D9] whitespace-pre-line lg:w-[735.92px] w-full lg:mt-0 mt-5 break-words font-normal text-[17.3px]">
                While tech platforms have made starting a fund easier than ever,
                it remains a nuanced process. GPs must consider portfolio
                construction, capital call schedules, check sizes, and follow-on
                investing, all without knowing the exact size their fund will
                close at. AngelList’s end-to-end solution, pairing our software
                with Belltower’s fund admin services, provides the necessary
                services for a fund under one roof.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewBlog;
