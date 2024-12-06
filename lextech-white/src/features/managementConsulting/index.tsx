import React, { useState } from "react";
import Layout from "../../Layout";
import { Transition } from "@headlessui/react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import LegalServices from "../../ui/legalServices";
import Articles from "../../ui/articles";

function ManagementConsulting() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 bg-[#F5F5F5] items-center justify-center px-10 mt-[8rem] whitespace-normal break-words">
        <div className="flex flex-col gap-y-5 w-full lg:max-w-[679px]">
          <button
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className="bg-primary-100 hover:scale-95 transition-all duration-300 w-fit px-5 lg:h-[44px] h-[30px] rounded-3xl gap-x-4 flex items-center"
            type="button"
          >
            <span className="bg-clip-text lg:text-[15.5px] text-xs text-transparent transition-all duration-300 bg-gradient-to-l from-[#FFB1B1] to-[#E8E7FF]">
              Legal Tech Services
            </span>

            <Transition
              show={onHover}
              enter="transform transition-transform ease-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition-transform ease-in duration-200"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <img
                src="./icons/arrow.svg"
                alt=""
                className={`w-[20px] h-[27px] object-contain mt-2`}
              />
            </Transition>
          </button>
          <span className="text-[#002A7F] lg:text-[72px] text-[40px] lg:leading-[80px] leading-[40px] ">
            Transforming Legal Practice Through Innovation
          </span>
          <span className="lg:text-[25.92px] text-[16px] font-normal text-[#002A7F]">
            Streamlined Solutions for Legal Professionals — Empowering
            Efficiency, Accessibility, and Growth with Cutting-Edge Technology."
          </span>
          <Button
            title="Contact sales"
            textStyle="text-white text-md"
            handleClick={() => navigate("/contact")}
            icon=""
            btnStyles={`bg-[#002A7F] rounded-lg mt-5`}
          />
        </div>
        <img
          src="./assets/management-image.png"
          className="w-[622px] h-auto object-contain rounded"
          alt=""
        />
      </div>
       
      <div className="mx-auto  w-auto lg:max-w-[1500px] whitespace-normal break-words">
      <p className="text-[40px] font-bold lg:font-normal lg:text-[55px] text-[#002A7F] mx-auto my-6 text-center">Our Legal Tech Services</p>
      </div>
 
      <div className="flex flex-col justify-center items-center w-auto lg:max-w-[1500px]  p-10 gap-y-5 mx-auto">
      
        <p className="text-[24px] text-[#002A7F] whitespace-normal break-words">
        At LexTech Ecosystems, we are at the forefront of driving revolutionary advancements across diverse sectors through our innovative solutions. Positioned at the convergence of legal technology, technology consulting, and management consulting, we specialize in end-to-end project management and consulting, ensuring unparalleled outcomes for our clients
      </p>

      <p className="text-[24px] text-[#002A7F] whitespace-normal break-words">     

Under the mantle of management consulting, LexTech takes pride in offering a diverse array of services focused on comprehensive business transformation.
        </p>
        
        {/* Navigation Tabs */}

        <div className="p-4 md:p-10 flex items-center justify-center flex-col gap-y-7 mx-auto">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-5 lg:gap-y-5  ">
        <div className="w-full lg:w-[325px] h-[374px] rounded-xl  flex flex-col items-center justify-center px-1 py-7 bg-[#D0CCFF]">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/NetC.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
              Tech Consulting
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={() => navigate('/Tech-Consulting')}
              btnStyles={"flex items-center gap-x-2 mt-16"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div className="w-[325px] h-[374px] rounded-xl bg-[#F8F2FF] flex flex-col items-center justify-center px-1 py-7">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/CMG.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
              Change Management
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={() => navigate('/Change-Management')}
              btnStyles={"flex items-center gap-x-2 mt-16"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[325px] h-[374px] rounded-xl bg-[#ECFAFD] flex flex-col items-center justify-center px-1 py-7">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/STC.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
              Strategy Consulting
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={() => navigate('/Strategy-Consulting')}
              btnStyles={"flex items-center gap-x-2 mt-[6rem]"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
            </div>
            <div className="w-[325px] h-[374px] rounded-xl bg-[#F1FDEC] flex flex-col items-center justify-center px-1 py-7">
          <div className="w-full h-[351px] flex flex-col justify-start items-center">
            <div className="flex items-center gap-y-4 justify-center flex-col">
              <img
                src="./assets/PMG.svg"
                className="w-[85px] h-[85px]"
                alt=""
              />
              <span className="text-[27px] font-normal text-center">
              Project Management
              </span>
            </div>
            <Button
              title={"Read more"}
              handleClick={() => navigate('/Project-Management')}
              btnStyles={"flex items-center gap-x-2 mt-[6rem]"}
              textStyle={"text-[20px]"}
              icon="./icons/nav-arrow-black.svg"
              iconStyle="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>

      </div>
      

      {/* <LegalServices /> */}
      <Articles />
    </Layout>
  );

}
export default ManagementConsulting;
