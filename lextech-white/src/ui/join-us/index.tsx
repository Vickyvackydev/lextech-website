import React from "react";
import Button from "../../components/button";
import { useLocation } from "react-router-dom";

function JoinUs() {
  const location = useLocation();
  return (
    <main
      className={`lg:px-10 px-5 lg:py-20 py-5 lg:-mt-0 mt-10  ${
        location.pathname.includes("/about") ? "bg-white" : "bg-[#FAFAFA]"
      } `}
    >
      <div className="w-full lg:max-w-[1415px] lg:pl-12 bg-[#CDEED3] h-full xl:h-[542.41px]  rounded flex xl:flex-row flex-col-reverse  lg:justify-between lg:gap-x-10 justify-center xl:items-end items-center lg:pt-0 pt-5  lg:mx-auto">
        <div className="flex flex-col gap-y-4 lg:gap-y-6 lg:mb-28 w-full py-5 px-3">
          <span className="text-[#23445A] lg:text-[26.25px] text-xl font-normal lg:leading-[36.4px] leading-[30px] text-center xl:text-left">
            Join us in making a difference <br /> in our Justice Sector
          </span>
          <span className="text-[#23445A] font-normal text-md text-center xl:text-left ">
            We’d love to talk to you. Reach out!
          </span>
          <Button
            title="Learn More"
            handleClick={() => {}}
            textStyle=""
            icon=""
            btnStyles="mt-6 border border-[#0A090914] rounded-xl w-full xl:w-[133px]"
          />
        </div>
        <img
          src="./assets/group-people.svg"
          className="w-[704px] h-auto"
          alt=""
        />
        {/* <img
          src="./assets/JOIN.png"
          className="w-[704px] h-[422.41px] block lg:hidden"
          alt=""
        /> */}
      </div>
    </main>
  );
}

export default JoinUs;
