import React, { useEffect, useState } from "react";
import { leaders } from "../../constants";

function Leaders() {
  return (
    <main className="w-full lg:px-20 px-5 py-20">
      <div className="flex flex-col gap-y-2">
        <span className="text-[#002A7F] font-normal">Our Leaders</span>
        <span className="text-[#002A7F] font-normal lg:text-[56.02px] text-4xl">
          Meet the Minds Behind Lextech
        </span>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5 gap-y-10 mt-8 lg:pb-0 pb-[5rem]">
        {leaders.map((item) => (
          <div className="flex flex-col items-start">
            <div
              className={`lg:w-[350px] w-full h-[411px] rounded-lg `}
              style={{ backgroundColor: item.bgColor }}
            >
              <img
                src={item.img}
                className={`w-[350px] h-[400px] object-cover mt-3 rounded-b-lg`}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="flex items-start flex-col mt-3">
              <span className="text-2xl font-bold">{item.name}</span>
              <span className="text-[16px] font-bold text-[#31313180]">
                {item.role}
              </span>
            </div>
            <span className="text-[#2A2C39CC] text-sm mt-7 lg:w-[350px] w-full">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Leaders;
