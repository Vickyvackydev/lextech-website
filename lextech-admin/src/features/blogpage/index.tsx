import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../../Layout";
import { FaSearch } from "react-icons/fa";
import Button from "../../components/button";
import Preloader from "../../ui/preloader";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { deletePost, GetAllBlogs } from "../../services";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../../state/slices/globalReducer";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { formatBackendText } from "../../utils";

function BlogPosts() {
  const [search, setSearch] = useState("");
  const [truncatedText, setTruncatedText] = useState<string | number>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [borderColor, setBorderColor] = useState(false);
  const [loader, setLoader] = useState(true);
  const { data: blogs, refetch } = useQuery("blog", GetAllBlogs);
  const data = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const combinedBlogs = [
    ...(blogs?.latest_article || []),
    ...(blogs?.industry_news || []),
  ];
  const totalPages = Math.ceil(combinedBlogs.length / itemsPerPage);

  const filteredBlogs = combinedBlogs?.filter((item: { title: string }) =>
    item?.title.toLowerCase().includes(search.toLowerCase())
  );
  const currentItems = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const loader = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(loader);
  }, []);

  const handleDelete = async (id: string | number) => {
    setLoading(true);
    try {
      const response = await deletePost(id);
      if (response) {
        toast.success("Blog deleted successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      refetch();
    }
  };
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
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                onFocus={() => setBorderColor(true)}
                className="w-full bg-transparent outline-none placeholder:text-sm placeholder:font-normal placeholder:text-[#999999]"
                placeholder="Search"
              />
            </div>
            <div className="flex items-end gap-y-3 flex-col">
              {combinedBlogs.length > 0 && (
                <div className="border border-[#DDDDDD] rounded h-[35px] flex items-center gap-x-0">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className={`text-[14px] text-[#777777] font-normal px-2 h-full border-r ${
                      currentPage > 1 ? "opacity-100" : "opacity-50"
                    } `}
                  >
                    Previous
                  </button>

                  <div className="h-full">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 h-full ${
                            page === currentPage
                              ? "bg-[#5D7BF7] text-white"
                              : "border-l"
                          } hover:bg-[#5D7BF7] hover:text-white`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className={`text-[14px] text-[#777777] font-normal px-2 h-full border-l ${
                      currentPage < totalPages ? "opacity-100" : "opacity-50"
                    } `}
                  >
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
          <div className="mt-7 flex flex-col items-center gap-y-[50px]">
            {currentItems?.length > 0 ? (
              currentItems?.map(
                (item: {
                  id: string | number;
                  title: string;
                  author: string;
                  date_created: string;
                  content: string;
                  featured_image: string;
                }) => (
                  <div className="w-full">
                    <div className="flex items-start flex-col gap-y-2">
                      <span className="text-xl font-normal text-[#5D7BF7]">
                        {item?.title}
                      </span>
                      <span className="text-sm font-normal text-[#505458]">
                        Written by{" "}
                        <span className="text-[#5D7BF7]">{item?.author}</span>{" "}
                        on {moment(item?.date_created).format("MMM D, YYYY")}
                      </span>
                      <div className="flex items-center gap-x-4 text-[#5D7BF7] font-normal text-sm">
                        {/* <div className="flex gap-x-2 items-center">
                        <img src={"/icons/eye.svg"} alt="" />
                        <span>View Blog</span>
                      </div> */}

                        <Link
                          to={`/edit-post?title=${item?.title}`}
                          onClick={() => dispatch(setSelectedBlog(item))}
                          className="flex gap-x-2 items-center "
                        >
                          <img src={"/icons/pencil.svg"} alt="" />
                          <span>Edit Blog</span>
                        </Link>

                        <div
                          className="flex gap-x-2 items-center cursor-pointer"
                          onClick={() => handleDelete(item?.id)}
                        >
                          {loading ? (
                            <PulseLoader size={14} color="red" />
                          ) : (
                            <>
                              <img src={"/icons/delete.svg"} alt="" />
                              <span>Delete post</span>
                            </>
                          )}
                        </div>

                        {/* <div className="flex gap-x-2 items-center">
                        <img src={"/icons/comment.svg"} alt="" />
                        <span>3 comments</span>
                      </div> */}

                        {/* <div className="flex gap-x-2 items-center">
                        <img src={"/icons/clip.svg"} alt="" />
                        <span>images</span>
                      </div> */}
                      </div>
                    </div>
                    <div className="mt-3">
                      <img
                        src={item?.featured_image}
                        className="w-full h-[451px]"
                        alt=""
                      />
                      <div className="mt-5 flex flex-col gap-y-4 ">
                        <span className="text-sm font-normal text-[#757575]">
                          {/* Distinguishing by comparing/creating differences. Some
                        ways of creating contrast among elements in the design
                        include using contrasting colors, sizes, shapes,
                        locations, or relationships. */}
                          {item?.content?.length > 300 &&
                          truncatedText !== item?.id
                            ? `${formatBackendText(
                                item?.content.slice(0, 300)
                              )}...`
                            : formatBackendText(item?.content)}
                        </span>
                        <Button
                          title={`${
                            truncatedText !== item?.id
                              ? "Read more"
                              : "Read less"
                          }`}
                          icon="/icons/arrows-right.svg"
                          textStyle="text-white text-[15px]"
                          handleClick={() => {
                            truncatedText === item?.id
                              ? setTruncatedText("")
                              : setTruncatedText(item?.id);
                          }}
                          btnStyles="flex items-center justify-center py-2 px-3  gap-1 rounded  bg-[#5D7BF7] border border-white w-fit h-fit"
                        />
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="flex items-center justify-center flex-col mt-10">
                <img
                  alt=""
                  className="w-[200px] h-[200px]"
                  src={"./assets/zoom-empty.svg"}
                />
                <span>No Uploaded Blog yet</span>
              </div>
            )}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

export default BlogPosts;
