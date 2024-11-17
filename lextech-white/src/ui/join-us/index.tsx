import React from "react";
import Button from "../../components/button";
import { useLocation } from "react-router-dom";

function JoinUs() {
  const location = useLocation();
  return (
    <main
      className={`lg:px-10 px-5 lg:py-20 py-5 lg:-mt-0 -mt-40  ${
        location.pathname.includes("/about") ? "bg-white" : "bg-[#FAFAFA]"
      } `}
    >
      <div className="w-full pl-8 bg-[#CDEED3] h-[542.41px] rounded flex lg:flex-row flex-col-reverse lg:justify-between justify-evenly lg:items-end items-start lg:pt-0 pt-10">
        <div className="flex flex-col gap-y-6 mb-28">
          <span className="text-[#23445A] lg:text-[34.73px] text-xl font-normal leading-[45px]">
            Join us in making a difference <br /> in our Justice Sector
          </span>
          <span className="text-[#23445A] font-normal text-md">
            We’d love to talk to you. Reach out!
          </span>
          <Button
            title="Learn More"
            handleClick={() => {}}
            textStyle=""
            icon=""
            btnStyles="mt-6 border border-[#0A090914] rounded-xl"
          />
        </div>
        <img
          src="./assets/group-people.svg"
          className="w-[704px] h-[422px.41px]"
          alt=""
        />
      </div>
    </main>
  );
}

export default JoinUs;
