import React from "react";
import Button from "../../components/button";

function Justice() {
  return (
    <main className="bg-[#0D0769] w-full lg:px-20 px-5 lg:py-28 py-10 ">
      <div className="flex lg:flex-row flex-col gap-y-6  items-start justify-around xl:gap-x-6 lg:gap-x-0">
        <div className="relative">
          <img
            src="./assets/bg-image.svg"
            className="lg:min-w-full min-w-[300px] object-contain"
            alt=""
            loading="lazy"
          />
          <div className="absolute lg:ml-[13rem] ml-[3rem] top-10 lg:mt-20 -mt-1">
            <div className="border-2 absolute top-5 -left-2 border-white rounded-lg w-[162px]  h-[154px] "></div>
            <div className="border-2 absolute top-1 left-5 border-white rounded-lg w-[162px] h-[154px] "></div>
            <div className="w-[170px] h-[165px] rounded-lg bg-white -top-6 absolute left-10 px-2 pt-3">
              <span className="-3">GET JUSTICE</span>
              <Button
                title="Justice"
                textStyle="text-white"
                btnStyles="bg-[#0D0769] rounded-md w-full h-[33px] mt-[5rem]"
                icon=""
                handleClick={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-[#E0DDFF] text-[34.73px] font-normal lg:leading-none leading-normal">
            Over 140 million Nigerians lack <br /> access to justice.
          </span>
          <p className="text-[15.25px] text-[#E0DDFF] font-normal lg:w-[538px] w-full">
            The inefficiencies in the legal system are further exacerbated by
            the reliance on manual methods for managing legal processes,
            creating a fragmented and cumbersome experience from law offices to
            police stations, the Ministry of Justice, courts, and correctional
            centers, leading to delays, increased risk of errors and
            inaccuracies, inefficient use of resources and personnel, limited
            transparency and accountability, difficulty in tracking and managing
            cases, and inadequate access to justice for all stakeholders,
            ultimately hindering the ability to effectively manage legal
            processes and placing a significant burden on the entire justice
            system.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Justice;
