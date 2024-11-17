import React, { useState } from "react";
import Button from "../../components/button";
import { Transition } from "@headlessui/react";

function AboutHero() {
  const [onHover, setOnHover] = useState(false);
  return (
    <main className="w-full flex items-center flex-col gap-y-5 justify-center bg-[#FAFAFA] lg:p-28 p-10">
      <button
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className="bg-primary-100 hover:scale-95 transition-all duration-300 w-fit px-5 lg:h-[44px] h-[30px] rounded-3xl gap-x-4 flex items-center"
        type="button"
      >
        <span className="bg-clip-text lg:text-[15.5px] text-xs text-transparent transition-all duration-300 bg-gradient-to-l from-[#FFB1B1] to-[#E8E7FF]">
          Explore Lextech Ecosystem Limited
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
      <span className="text-[#002A7F] font-normal lg:text-[80px] text-3xl text-center lg:leading-[80px] leading-normal">
        The <span className="text-[#79747E]">Intersection</span> of <br /> Law
        and Innovation
      </span>
      <div className="mt-4 space-x-5 flex">
        <Button
          title="Contact sales"
          icon=""
          textStyle="text-[#1D2A29] font-medium text-[15.25px]"
          handleClick={() => {}}
          btnStyles="bg-[#CDEED3] rounded-lg"
        />
        <Button
          title="Request a demo"
          icon=""
          textStyle="text-white font-medium text-[15.25px]"
          handleClick={() => {}}
          btnStyles="bg-[#0D0769] rounded-lg"
        />
      </div>
    </main>
  );
}

export default AboutHero;
