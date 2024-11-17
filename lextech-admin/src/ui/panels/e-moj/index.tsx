import React, { useState } from "react";
import SidePanel from "../../../components/sidepanel";
import Button from "../../../components/button";

function Emoj({ slide, setSlide }: { slide: boolean; setSlide: () => void }) {
  const [textSlide, setTextSlide] = useState("registry");
  return (
    <SidePanel show={slide} hide={setSlide}>
      <div className="flex flex-col items-start gap-y-2">
        <span className="text-[56.02px] font-normal text-white">e-MoJ</span>
        <span className="text-[#FFFFFF82] font-normal text-[56.02px] leading-tight">
          Get your Verifiable <br /> Affidavit.
        </span>
        <span className="text-white font-normal  text-[20px] w-[872px] mt-4">
          The e-Affidavit is an online platform that allows individuals and
          businesses to create, sign, and notarize affidavits and oaths
          remotely. Our user-friendly interface provides a convenient and secure
          way to handle legal documents without needing in-person visits to
          notary offices or the courts.
        </span>
        <div className="mt-4 space-x-5">
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
          <span className="text-white font-normal text-[25.92px]">
            How e-Moj works
          </span>
          <div className="mt-10 gap-5 grid grid-cols-3 w-[872px]">
            <Button
              title="Select A Template"
              icon="./icons/edit.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-lg"
              handleClick={() => {}}
              btnStyles={` bg-[#1749AE] w-full h-full py-7 rounded-lg  flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Preview, Edit & Submit"
              icon="./icons/check-form.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-lg text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#003298] w-full h-full  rounded-lg w-[311px] h-[149px] flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Make Payments"
              icon="./icons/payment.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[17.3px] text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#003298] w-full h-full py-7 rounded-lg flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Make a virtual booking"
              icon="./icons/booking.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[17.3px] text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#1749AE] w-full h-full rounded-lg  flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
            <Button
              title="Get Verified Affidavit"
              icon="./icons/document.svg"
              iconStyle="w-[29.17px] h-[29.17px]"
              textStyle="text-white font-medium text-[17.3px] text-start"
              handleClick={() => {}}
              btnStyles={` bg-[#003298] w-full h-full py-7 rounded-lg flex items-start justify-center gap-y-4 px-10 flex-col-reverse`}
            />
          </div>
        </div>
      </div>
    </SidePanel>
  );
}

export default Emoj;
