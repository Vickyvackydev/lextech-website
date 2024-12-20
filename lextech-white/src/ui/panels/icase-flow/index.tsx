import React, { useState } from "react";
import SidePanel from "../../../components/sidepanel";
import Button from "../../../components/button";

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
        <span className="lg:text-[56.02px] font-normal text-primary-200 text-4xl">
          iCASEFLOW
        </span>
        <span className="text-primary-100 font-normal lg:text-[56.02px] text-4xl leading-tight">
          Innovative Case <br /> Management System
        </span>
        <span className="text-primary-200 font-normal  lg:text-[20px] text-lg lg:w-[872px] w-full mt-4">
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

        <div className="flex flex-col gap-y-8 mt-5">
          <div className=" flex flex-col gap-y-4">
            <div className="flex items-start gap-x-3">
              <img
                src="./icons/registry.svg"
                className="w-[29.17px] h-[29.17px]"
                alt=""
              />
              <span className="text-[#0D0769] font-medium text-2xl">
                e-Registry
              </span>
            </div>
            <span className=" font-normal text-primary-200  text-[20px] lg:w-[872px] w-full">
              Registry staff easily receive and review all cases filed through
              the electronic filing system after confirmation of payment. Cases
              approved as properly filed are electronically presented to the
              Chief Judge for assignment. When electronically assigned by the
              Chief Judge, these cases are transferred to the electronic docket
              of the designated courts for adjudication.
            </span>
          </div>
          <div className=" flex flex-col gap-y-4">
            <div className="flex items-start gap-x-3">
              <img
                src="./icons/court.svg"
                className="w-[29.17px] h-[29.17px]"
                alt=""
              />
              <span className="text-[#0D0769] font-medium text-2xl">
                e-Courts
              </span>
            </div>
            <span className=" font-normal text-primary-200  text-[20px] lg:w-[872px] w-full">
              The e-Court system enables the honourable Judges to gain access to
              the electronic case files of cases assigned to their courts.
              Directions by the Court as to court sitting dates and time
              including notice of adjournments are easily forwarded to
              litigants/counsel from time to time.
            </span>
          </div>
        </div>
      </div>
    </SidePanel>
  );
}

export default IcaseFlow;
