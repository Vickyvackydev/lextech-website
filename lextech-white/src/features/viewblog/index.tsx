import React from "react";
import Layout from "../../Layout";

function ViewBlog() {
  const text =
    "  Emerging Managers are typically considered those who have launched less than three funds or are launching a fund under $200M, with limited prior experience managing their own VC fund but oftentimes bring fresh perspectives and innovative strategies. In 2024, they make up approximately 14%* of the Venture Capital market. Historically, becoming a solo General Partner (GP) came with  overwhelming hurdles considering the complexity of operating a fund and the associated cost. In 2019, AngelList brought a new  software to market and paired with Belltower’s, our native fund  admin, services created an end-to-end offering that helped  democratize venture capital investing by making it easier for  small funds to launch and scale. Today, AngelList and Belltower  support hundreds of fund managers with over $16B of GP fund assets  under management. As a member of AngelList's Growth Team, I've  spent the last four years speaking with over 1,000 emerging or  aspiring venture fund managers, helping them find the best  solutions for forming and managing their venture capital funds.  From starting their investor journey by launching their first SPVs  to oversubscribed funds backed by prominent LPs, AngelList has had  the opportunity to partner with them through each stage. To help  more Emerging Managers, we decided to consolidate the best  practices we’ve seen over the years and create a comprehensive  guide. From starting their investor journey by launching their first SPVs to oversubscribed funds backed by prominent LPs, AngelList has had the opportunity to partner with them through each stage. To help more Emerging Managers, we decided to consolidate the best practices we’ve seen over the years and create a comprehensive guide,.";
  const textPara = text.split(".  ").map((para) => para + ".");
  return (
    <Layout>
      <div className="flex lg:flex-row flex-col items-start mt-28 px-7 justify-between">
        <div>
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-xs font-medium text-[#1D2A29A6]">
              {` Written by`.toUpperCase()}
            </span>
            <img
              src="/assets/gal.svg"
              className="w-[40px] h-[40px] rounded-full object-contain"
              alt=""
            />
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#002B31] font-medium">
                Sam Rosenbaum
              </span>
              <span className="text-[#1D2A29A6] font-normal text-xs">
                Growth
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-8">
            <div className="w-[40px] cursor-pointer h-[40px] rounded flex items-center justify-center bg-[#8A8A7B1A]">
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
              The Emerging Manager’s Guide: How to plan your Fund I
            </span>
            <span className="text-[21.14px] font-normal text-[#1D2A29A6]">
              Insights and lessons learned from Emerging Managers on launching
              their first venture fund.
            </span>
            <span className="text-xs font-medium text-[#002B31]">
              {" "}
              <span className="text-[#1D2A29A6] font-normal">
                Aug 20, 2024{" "}
              </span>
              — 4 min read
            </span>
          </div>
          <div className="lg:mt-0 mt-5">
            <img
              src="/assets/vanek.svg"
              className="w-full lg:h-[536px] h-full object-contain"
              alt=""
            />
          </div>
          <div>
            {textPara.map((para, i) => (
              <p
                key={i}
                className=" text-[#002B31D9] whitespace-pre-line lg:w-[735.92px] w-full lg:mt-0 mt-5 break-words font-normal text-[17.3px] mb-6"
              >
                {para}
              </p>
            ))}
            <div className="flex flex-col gap-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewBlog;
