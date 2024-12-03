import React from "react";
import Button from "../../components/button";
import { useNavigate } from 'react-router-dom';

function LegalServices() {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-10 flex items-center justify-center flex-col gap-y-7 mx-auto">
      <span className="text-[30px] font-bold lg:font-normal lg:text-[55px] text-[#002A7F] mx-auto my-6 text-center">
       <p className="text-[40px] font-bold lg:font-normal lg:text-[55px] text-[#002A7F] mx-auto my-6 text-center">Our Legal Tech Services</p> 
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-y-5 ">
        <div className="w-full lg:w-[325px] h-[374px] rounded-xl  flex flex-col items-center justify-center px-1 py-7 bg-[#D0CCFF]">
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
              handleClick={() => navigate('/icaseflow')}
              btnStyles={"flex items-center gap-x-2 mt-16"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[325px] h-[374px] rounded-xl  flex flex-col items-center justify-center px-1 py-7 bg-[#F8F2FF]">
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
              handleClick={() => navigate('/Verbatim-research-academy')}
              btnStyles={"flex items-center gap-x-2 mt-16"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[325px] h-[374px] rounded-xl  flex flex-col items-center justify-center px-1 py-7 bg-[#ECFAFD]">
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
              handleClick={() => navigate('/Legal-search-solution')}
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

// Verbatim-research-academy

export default LegalServices;
