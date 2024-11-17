import React, { useState } from "react";
import SidePanel from "../../../components/sidepanel";
import Button from "../../../components/button";
import { Transition } from "@headlessui/react";

function IcaseFlow({
  slide,
  setSlide,
}: {
  slide: boolean;
  setSlide: () => void;
}) {
  const [textSlide, setTextSlide] = useState("registry");
  return (
    <SidePanel show={slide} hide={setSlide}>
      <div className="flex flex-col items-start gap-y-2">
        <span className="lg:text-[56.02px] font-normal text-white text-4xl">
          iCASEFLOW
        </span>
        <span className="text-[#FFFFFF82] font-normal lg:text-[56.02px] text-4xl leading-tight">
          Innovative Case <br /> Management System
        </span>
        <span className="text-white font-normal  lg:text-[20px] text-lg lg:w-[872px] w-full mt-4">
          Our Innovative Case Management System (iCASEFLOW) for the
          Court/Police/Ministry of Justice, automates workflow processes for
          these and other stakeholders by eliminating bottlenecks that hamper
          speed, efficiency, accuracy and high productivity.
        </span>
        <div className="mt-4 gap-x-5 flex lg:flex-row flex-col gap-y-4 lg:items-center items-start">
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
        <div className="mt-10 gap-x-5 gap-y-5 flex lg:flex-row flex-col lg:w-[872px] w-full  ">
          <Button
            title="e-Registry"
            icon="./icons/registry.svg"
            iconStyle="w-[29.17px] h-[29.17px]"
            textStyle="text-white font-medium text-[25.92px]"
            handleClick={() => setTextSlide("registry")}
            btnStyles={` ${
              textSlide === "registry" ? "bg-[#261EA6]" : "bg-[#1A138C75]"
            } rounded-lg w-full h-full py-7 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
          />
          <Button
            title="e-Courts"
            icon="./icons/court.svg"
            iconStyle="w-[29.17px] h-[29.17px]"
            textStyle="text-white font-medium text-2xl"
            handleClick={() => setTextSlide("court")}
            btnStyles={` ${
              textSlide === "court" ? "bg-[#261EA6]" : "bg-[#1A138C75]"
            } rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
          />
        </div>
        <Transition
          as={"div"}
          show={textSlide === "registry"}
          enter="transform transition-transform ease-out duration-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition-transform ease-in duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
          className="mt-10"
        >
          <span className="text-white font-normal  text-[20px] w-[872px]">
            Registry staff easily receive and review all cases filed through the
            electronic filing system after confirmation of payment. Cases
            approved as properly filed are electronically presented to the Chief
            Judge for assignment. When electronically assigned by the Chief
            Judge, these cases are transferred to the electronic docket of the
            designated courts for adjudication.
          </span>
        </Transition>
        <Transition
          as={"div"}
          show={textSlide === "court"}
          enter="transform transition-transform ease-out duration-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition-transform ease-in duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
          className="mt-10"
        >
          <span className="text-white font-normal  text-[20px] w-[872px] ">
            The e-Court system enables the honourable Judges to gain access to
            the electronic case files of cases assigned to their courts.
            Directions by the Court as to court sitting dates and time including
            notice of adjournments are easily forwarded to litigants/counsel
            from time to time.
          </span>
        </Transition>
      </div>
    </SidePanel>
  );
}

export default IcaseFlow;
