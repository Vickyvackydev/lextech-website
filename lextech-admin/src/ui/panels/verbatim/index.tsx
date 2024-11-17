import React, { useState } from "react";
import SidePanel from "../../../components/sidepanel";
import Button from "../../../components/button";
import { Transition } from "@headlessui/react";
import { verbatims } from "../../../constants";

function Verbatim({
  slide,
  setSlide,
}: {
  slide: boolean;
  setSlide: () => void;
}) {
  return (
    <SidePanel show={slide} hide={setSlide}>
      <div className="flex flex-col items-start gap-y-2">
        <span className="lg:text-[56.02px] text-[30px] font-normal text-white lg:leading-[60px] leading-tight">
          Verbatim Reporting <br /> Academy
        </span>
        <span className="text-[#FFFFFF82] font-normal lg:text-[56.02px] text-4xl leading-tight">
          Court reporting and <br className="lg:visible hidden" />{" "}
          transcription.
        </span>
        <span className="text-white font-normal  text-[20px] lg:w-[872px] w-full mt-4">
          Our Verbatim Reporting Academy strives to rank among the best
          providers of high-quality training and certification of Verbatim Court
          Reporters and scopists, and providing ancillary services towards
          improving efficiency and speed in the administration of justice in
          Nigeria, Africa and the world.
        </span>
        <div className="mt-4 flex lg:flex-row flex-col gap-x-5 gap-y-5">
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
            btnStyles="bg-[#372FB2] rounded-lg"
          />
        </div>

        <div className="mt-10">
          <span className="text-white font-normal  lg:text-[34.73px] text-2xl w-[929px]  lg:leading-[45px] leading-normal">
            Our Academy trains and certifies a large pool of verbatim reporters
            and scopists to serve both the Nigerian and African markets
          </span>
        </div>
        <div className="flex flex-col gap-y-6 mt-10">
          {verbatims.map((item) => (
            <div className="flex items-start justify-start gap-x-4 border-b pb-4 border-[#E7E7E763]">
              <img
                src="./icons/circle.svg"
                className="w-[15px] h-[15px] mt-2"
                alt=""
              />
              <p className="text-[20px] font-normal text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </SidePanel>
  );
}

export default Verbatim;
