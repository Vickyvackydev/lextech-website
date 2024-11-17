import React, { useState } from "react";
import SidePanel from "../../../components/sidepanel";
import Button from "../../../components/button";
import { Transition } from "@headlessui/react";

function Eprobate({
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
        <span className="lg:text-[56.02px] text-4xl font-normal text-primary-200">
          e-Probate
        </span>
        <span className="text-primary-100 font-normal lg:text-[56.02px] text-4xl leading-tight">
          Streamlining probate <br /> matters
        </span>
        <span className="text-primary-200 font-normal  text-[20px] lg:w-[872px] w-full mt-4">
          The e-Probate service is a digital platform transforming probate
          matters and practice in Enugu State, aimed at speeding up the probate
          administration process & management using technology.
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
        <div className="flex items-start flex-col mt-10">
          <span className="text-[#2C5282] font-normal text-[25.92px]">
            How e-Probate works
          </span>
          <div className="mt-10 flex lg:flex-row flex-col gap-5 ">
            <Button
              title="Create an account"
              icon="./icons/edit.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-lg"
              handleClick={() => setTextSlide("registry")}
              btnStyles={` ${
                textSlide === "registry" ? "bg-[#261EA6]" : "bg-[#473ED3]"
              } rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Begin your application for a service"
              icon="./icons/check-form.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-lg text-start"
              handleClick={() => setTextSlide("service")}
              btnStyles={` ${
                textSlide === "service" ? "bg-[#261EA6]" : "bg-[#473ED3]"
              } rounded-lg w-full h-full py-[18.5px] flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Processing, compliance, and completion of an application."
              icon="./icons/task.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[16px] text-start"
              handleClick={() => setTextSlide("process")}
              btnStyles={` ${
                textSlide === "process" ? "bg-[#261EA6]" : "bg-[#473ED3]"
              } rounded-lg w-full h-full  py-[23px] flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
          </div>
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
          <span className="text-primary-200 font-normal  text-[20px] w-[872px]">
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
          show={textSlide === "service"}
          enter="transform transition-transform ease-out duration-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition-transform ease-in duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
          className="mt-10"
        >
          <span className="text-primary-200 font-normal  text-[20px] w-[872px] ">
            From your dashboard, apply for a service and provide requested
            details, upload documents, make payment, and provide additional info
            if requested.
          </span>
        </Transition>
        <Transition
          as={"div"}
          show={textSlide === "process"}
          enter="transform transition-transform ease-out duration-300"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition-transform ease-in duration-200"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
          className="mt-10"
        >
          <span className="text-primary-200 font-normal  text-[20px] w-[872px] ">
            After you submit your application, it will be reviewed, and
            additional information may be requested. All requirements must be
            fulfilled until the grant or order is issued or denied.
          </span>
        </Transition>
      </div>
    </SidePanel>
  );
}

export default Eprobate;
