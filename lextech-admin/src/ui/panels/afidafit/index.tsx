import React, { useState } from "react";
import SidePanel from "../../../components/sidepanel";
import Button from "../../../components/button";

function Affidavit({
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
        <span className="lg:text-[56.02px] text-4xl font-normal text-white">
          e-Notary / e-Affidavit
        </span>
        <span className="text-[#FFFFFF82] font-normal lg:text-[56.02px] text-4xl leading-tight">
          Get your Verifiable <br /> Affidavit.
        </span>
        <span className="text-white font-normal  text-[20px] lg:w-[872px] w-full mt-4">
          The e-Affidavit is an online platform that allows individuals and
          businesses to create, sign, and notarize affidavits and oaths
          remotely. Our user-friendly interface provides a convenient and secure
          way to handle legal documents without needing in-person visits to
          notary offices or the courts.
        </span>
        <div className="mt-4 flex lg:flex-row flex-col gap-5">
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
        <div className="flex items-start flex-col mt-10 w-full">
          <span className="text-white font-normal text-[25.92px]">
            How e-Notary works
          </span>
          <div className="mt-10 gap-5 grid lg:grid-cols-3 grid-cols-1 lg:w-[872px] w-full">
            <Button
              title="Select A Template"
              icon="./icons/edit.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-lg"
              handleClick={() => {}}
              btnStyles={` bg-[#261EA6] rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Preview, Edit & Submit"
              icon="./icons/check-form.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-lg text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#261EA6] rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Make Payments"
              icon="./icons/payment.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[17.3px] text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#261EA6]  rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Make a virtual booking"
              icon="./icons/booking.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[17.3px] text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#261EA6]  rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Get Verified Affidavit"
              icon="./icons/document.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[17.3px] text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#261EA6]  rounded-lg w-full h-full py-8 flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
          </div>
        </div>
      </div>
    </SidePanel>
  );
}

export default Affidavit;
