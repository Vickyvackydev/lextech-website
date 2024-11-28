import React from "react";
import Button from "../../components/button";

function LegalServices() {
  return (
    <div className="p-10 flex items-center justify-center flex-col gap-y-7">
      <span className="text-[72px] font-normal text-[#002A7F]">
        Our Legal Tech Services
      </span>
      <div className="flex items-center gap-x-4 justify-center">
        <div className="w-[396px] h-[514px] rounded-xl  flex flex-col items-center justify-center px-1 py-7 bg-[#D0CCFF]">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/frame_1.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
                Innovative Case Management System (iCASEFLOW)
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={undefined}
              btnStyles={"flex items-center gap-x-2 mt-16"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div className="w-[396px] h-[514px] rounded-xl bg-[#F8F2FF] flex flex-col items-center justify-center px-1 py-7">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/frame_2.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
                Lextech Verbatim Reporting Academy
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={undefined}
              btnStyles={"flex items-center gap-x-2 mt-16"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div className="w-[396px] h-[514px] rounded-xl bg-[#ECFAFD] flex flex-col items-center justify-center px-1 py-7">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/frame_3.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
                Experience Legal Research
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={undefined}
              btnStyles={"flex items-center gap-x-2 mt-[6rem]"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalServices;
