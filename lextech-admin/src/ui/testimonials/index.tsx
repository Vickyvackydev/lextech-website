import React from "react";

function Testimonials() {
  return (
    <main className="flex justify-center items-center bg-[#FAFAFA] pb-11 lg:mt-0 mt-10">
      <div className="flex flex-col gap-5 items-center">
        <span className="text-[17.3px] font-normal text-[#002A7F]">
          Testimonies from our trusted client.
        </span>
        <span className="lg:text-[56.02px] text-2xl font-normal text-[#002A7F] text-center break-words lg:w-[850px] w-full  leading-tight">
          “More than just feeling less stressed about my finances, I feel a lot
          more in control of my life!”
        </span>
        <div className="flex flex-col gap-y-3 items-center">
          <img
            src="./assets/julius.svg"
            className="rounded-full object-contain w-[132px] h-[132px]"
            alt=""
          />
          <span className="font-normal text-[25.92px]">Julius</span>
          <span className="font-normal text-[25.92px]">Managing director</span>
        </div>
      </div>
    </main>
  );
}

export default Testimonials;
