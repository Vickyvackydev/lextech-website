import React from "react";
import { CardProps } from "../../types";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../../state/slices/globalstateReducer";

function Card({
  data,
}: {
  data: {
    title: string;
    featured_image: string;
    created_at: string;
    id: string | number;
    tags: Array<string>;
  };
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div key={data.id} className="flex flex-col items-start border-b pb-5">
      <img
        src={data.featured_image}
        className="object-cover w-full h-[168px] rounded"
        alt=""
        loading="lazy"
      />
      <div className="w-fit px-1 py-1 text-xs bg-[#8A8A7B1A] rounded-md mt-2">
        {data.tags[0]}
      </div>
      <div className=" flex flex-col mt-4">
        <span
          className="min-h-[130px] text-[#002B31] font-normal text-[17.16px] hover:underline cursor-pointer"
          onClick={() => {
            navigate(`/view?title=${data.title}`);
            dispatch(setSelectedBlog(data));
          }}
        >
          {data.title}
        </span>
        <span className="text-[#1D2A29A6] text-xs">
          {moment(data.created_at).format("MMM D, YYYY")}
          {/* <span className="text-[#1D2A29A6] font-semibold">
            {data.timeread}
          </span> */}
        </span>
      </div>
    </div>
  );
}

export default Card;
