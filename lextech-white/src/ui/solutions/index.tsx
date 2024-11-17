import React from "react";
import { solutions } from "../../constants";

function Solutions() {
  return (
    <main className="lg:px-20 px-5 py-20">
      <div>
        <span className="text-[#08043F] font-normal text-[34.73px]">
          Our solutions include:
        </span>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-16 gap-x-5 mt-20">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="border-l border-[#E7E7E7] flex flex-col pl-3"
            >
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="w-[160px] h-[150px] object-contain"
                />
              </div>
              <div className="-mt-9 flex flex-col gap-y-3">
                <span className="text-[16px] font-normal">{item.title}</span>
                <span className="text-[#6C7574] text-[15.5px] font-medium">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Solutions;
