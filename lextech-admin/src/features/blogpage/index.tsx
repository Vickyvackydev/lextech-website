import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../../Layout";
import { FaSearch } from "react-icons/fa";
import Button from "../../components/button";
import Preloader from "../../ui/preloader";
import { useNavigate } from "react-router-dom";

function BlogPosts() {
  const navigate = useNavigate();
  const [borderColor, setBorderColor] = useState(false);
  const [loader, setLoader] = useState(true);
  const data = [1, 2, 3];

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(loader);
  }, []);
  return (
    <DashboardLayout>
      {loader ? (
        <Preloader />
      ) : (
        <div className="bg-white w-full h-full px-10 py-7">
          <div className="flex items-start justify-between">
            <div
              className={`border-b-2 ${
                borderColor ? "border-b-[#5D7BF7]" : "border-b-gray-400"
              } transition-all duration-500  w-[590px] gap-x-2 flex items-center`}
            >
              <FaSearch size={13} color="#5D7BF7" />
              <input
                type="text"
                onFocus={() => setBorderColor(true)}
                className="w-full bg-transparent outline-none placeholder:text-sm placeholder:font-normal placeholder:text-[#999999]"
                placeholder="Search"
              />
            </div>
            <div className="flex items-end gap-y-3 flex-col">
              {data.length > 0 && (
                <div className="border border-[#DDDDDD] rounded h-[35px] flex items-center gap-x-0">
                  <button className="text-[14px] text-[#777777] font-normal px-2 h-full  border-r">
                    Previous
                  </button>
                  <div className="h-full">
                    {[1, 2, 3, 4].map((_, i) => (
                      <button
                        className={` px-4 h-full ${
                          i < 1 ? "" : "border-l "
                        } hover:bg-[#5D7BF7] hover:text-white`}
                      >
                        {_}
                      </button>
                    ))}
                  </div>
                  <button className="text-[14px] text-[#777777] font-normal px-2 h-full border-l">
                    Next
                  </button>
                </div>
              )}

              <div>
                <Button
                  title="Add blog post"
                  icon="/icons/plus-icon.svg"
                  textStyle="text-white text-[14px]"
                  handleClick={() => navigate("/add-post")}
                  btnStyles="flex flex-row-reverse items-center w-full h-full px-10 py-2 gap-1 rounded-lg  bg-[#46A4FF] border border-white w-fit h-fit"
                />
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-col items-start gap-y-[50px]">
            {data.length > 0 ? (
              data.map((_) => (
                <div>
                  <div className="flex items-start flex-col gap-y-2">
                    <span className="text-xl font-normal text-[#5D7BF7]">
                      What is Graphic Design?
                    </span>
                    <span className="text-sm font-normal text-[#505458]">
                      Written by <span className="text-[#5D7BF7]">Jason</span>{" "}
                      on May 11, 2015
                    </span>
                    <div className="flex items-center gap-x-4 text-[#5D7BF7] font-normal text-sm">
                      <div className="flex gap-x-2 items-center">
                        <img src={"/icons/eye.svg"} alt="" />
                        <span>View Blog</span>
                      </div>

                      <div className="flex gap-x-2 items-center">
                        <img src={"/icons/pencil.svg"} alt="" />
                        <span>Edit Blog</span>
                      </div>

                      <div className="flex gap-x-2 items-center">
                        <img src={"/icons/delete.svg"} alt="" />
                        <span>Delete post</span>
                      </div>

                      <div className="flex gap-x-2 items-center">
                        <img src={"/icons/comment.svg"} alt="" />
                        <span>3 comments</span>
                      </div>

                      <div className="flex gap-x-2 items-center">
                        <img src={"/icons/clip.svg"} alt="" />
                        <span>images</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <img
                      src="/assets/images.png"
                      className="w-full h-[451px]"
                      alt=""
                    />
                    <div className="mt-5 flex flex-col gap-y-4 ">
                      <span className="text-sm font-normal text-[#757575]">
                        Distinguishing by comparing/creating differences. Some
                        ways of creating contrast among elements in the design
                        include using contrasting colors, sizes, shapes,
                        locations, or relationships.
                      </span>
                      <Button
                        title="Read more"
                        icon="/icons/arrows-right.svg"
                        textStyle="text-white text-[15px]"
                        handleClick={() => {}}
                        btnStyles="flex items-center justify-center py-2 px-3  gap-1 rounded  bg-[#5D7BF7] border border-white w-fit h-fit"
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center mt-[10rem]">
                <span className="text-center">nothing dey here</span>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default BlogPosts;
