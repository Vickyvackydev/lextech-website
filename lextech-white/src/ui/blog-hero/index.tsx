import React, { useState } from "react";
import { articles, tags } from "../../constants";
import Card from "../../components/card";

function BlogHero() {
  const [hover, setHover] = useState<number | null>(1);
  return (
    <main className=" pt-16">
      <div className="flex flex-col lg:px-10 px-5">
        <span className="text-[#002A7F] font-medium text-[80px]">Blog</span>
        <span className="text-[#002A7F] font-medium text-lg -mt-4">
          The latest on how we're revoluntizing private markets
        </span>
        <div className="flex gap-x-1 mt-4 w-full overflow-y-scroll">
          {tags.map((item, i) => (
            <div
              onMouseLeave={() => setHover(null)}
              onMouseEnter={() => {
                setHover(i);
              }}
              className={`min-w-fit ${
                hover === i ? "bg-[#0D0769]" : "bg-[#8A8A7B1A]"
              } hover:cursor-pointer   px-3 h-full py-1  flex gap-1 items-end justify-center rounded-sm`}
            >
              <span
                className={` text-sm font-medium  ${
                  hover === i ? "text-white" : "text-[#002B31]"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`text-xs font-medium  mb-1 ${
                  hover === i ? "text-white" : "text-primary-100"
                }`}
              >
                {item.limits}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-b lg:px-10 px-5 py-10 flex items-start lg:flex-row flex-col lg:gap-x-10 gap-y-10">
        <img src="./assets/bg-image.svg" alt="" loading="lazy" />
        <div className="w-[300px] flex flex-col gap-y-4">
          <div className="w-fit hover:bg-[#0D0769] cursor-pointer text-[#002B31] hover:text-white  px-3 h-full py-1 bg-[#8A8A7B1A] flex gap-1 items-end justify-center rounded-sm">
            <span className=" text-sm font-medium ">Case studies</span>
          </div>
          <span className="text-[#002A7F] font-medium text-3xl ">
            How VanEck Elevates LP Onboarding with AngelList Investor Management
            Suite
          </span>

          <span className="text-[#1D2A29A6] text-xs">
            AUG 27, 2024 - {"  "}
            <span className="text-[#002A7F] font-semibold">5 MIN READ</span>
          </span>
        </div>
      </div>

      <div className="lg:px-10 px-5 py-10">
        <div className="flex items-center gap-x-3">
          <img src="./icons/bkgrd.svg" className="w-[12px] h-[12px]" alt="" />
          <span className="text-[#002B31] text-[15.38px] font-normal">
            Latest articles
          </span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
          {articles.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="lg:px-10 px-5 py-10">
        <div className="flex items-center gap-x-3">
          <img src="./icons/bkgrd.svg" className="w-[12px] h-[12px]" alt="" />
          <span className="text-[#002B31] text-[15.38px] font-normal">
            Industry news
          </span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
          {articles.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default BlogHero;
