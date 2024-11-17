import React from "react";
import { CardProps } from "../../types";

function Card({ data }: { data: CardProps }) {
  return (
    <div key={data.id} className="flex flex-col items-start border-b pb-5">
      <img
        src={data.img}
        className="object-contain w-[336px] h-[168px] rounded"
        alt=""
        loading="lazy"
      />
      <div className="w-fit px-1 py-1 text-xs bg-[#8A8A7B1A] rounded-md">
        {data.topic}
      </div>
      <div className=" flex flex-col mt-4">
        <span className="min-h-[130px] text-[#002B31] font-normal text-[17.16px]">
          {data.title}
        </span>
        <span className="text-[#1D2A29A6] text-xs">
          {data.date} -{" "}
          <span className="text-[#1D2A29A6] font-semibold">
            {data.timeread}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Card;
