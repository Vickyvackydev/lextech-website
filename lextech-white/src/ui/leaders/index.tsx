import React, { useEffect, useState } from "react";
import { leaders } from "../../constants";
import { getAboutPageApi, GetLeadersApi } from "../../services";
import { useQuery } from "react-query";

function getRandomColors() {
  const colors = ["#CDEED3", "#79747E", "#F2DFA0", "#D5D5D5", "#DDEBDF"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function Leaders() {
  // const { data: leaders, refetch } = useQuery("leaders", GetLeadersApi);
  const { data: leaders } = useQuery("about-us", getAboutPageApi);

  const bgColor = getRandomColors();
  return (
    <main className="w-full lg:px-20 px-5 py-20">
      <div className="w-full lg:max-w-[1500px] lg:mx-auto">
         <div className="flex flex-col gap-y-2">
        <span className="text-[#002A7F] font-normal">Our Leaders</span>
        <span className="text-[#002A7F] font-normal lg:text-[56.02px] text-4xl">
          Meet the Minds Behind Lextech
        </span>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-10 mt-8 lg:pb-0 pb-[5rem]">
        {leaders?.our_leader?.length > 0 &&
          leaders?.our_leader?.map(
            (item: {
              name: string;
              position: string;
              image: string;
              body: string;
            }) => (
              <div className="flex flex-col items-start">
                <div
                  className={`lg:w-[350px] w-full h-[411px] rounded-lg `}
                  style={{ backgroundColor: bgColor }}
                >
                  <img
                    src={item.image}
                    className={`w-[350px] h-[400px] object-cover mt-3 rounded-b-lg`}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start flex-col mt-3">
                  <span className="text-2xl font-bold">{item.name}</span>
                  <span className="text-[16px] font-bold text-[#31313180]">
                    {item.position}
                  </span>
                </div>
                <span className="text-[#2A2C39CC] text-sm mt-7 lg:w-[350px] w-full">
                  {item.body}
                </span>
              </div>
            )
          )}
      </div>
      </div>
     
    </main>
  );
}

export default Leaders;
