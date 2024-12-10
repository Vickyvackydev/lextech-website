import React, { useState } from "react";
import Layout from "../../Layout";
import { Transition } from "@headlessui/react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import LegalServices from "../../ui/legalServices";
import Articles from "../../ui/articles";

function LegalTechServices() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className=" flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 items-center justify-center lg:px-10 px-5 mt-20 whitespace-normal break-words">
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
          <span className="text-[#002A7F] lg:text-[60px] text-[40px] lg:leading-[60px] leading-[40px]">
            Transforming Legal Practice Through Innovation
          </span>
          <span className="lg:text-[20px] text-[16px] font-normal text-[#002A7F]">
            Streamlined Solutions for Legal Professionals — Empowering
            Efficiency, Accessibility, and Growth with Cutting-Edge Technology."
          </span>
          <Button
            title="Contact sales"
            textStyle="text-white text-md"
            handleClick={() => navigate("/contact")}
            icon=""
            btnStyles={`bg-primary-200 rounded-lg mt-5`}
          />
        </div>
        <img
          src="./assets/legal-image.png"
          className="w-[622px] h-auto object-contain rounded"
          alt=""
        />
      </div>
      <LegalServices />
      <Articles />
    </Layout>
  );
}

export default LegalTechServices;
