import React, { useState } from "react";
import { articles, tags } from "../../constants";
import Card from "../../components/card";
import { useQuery } from "react-query";
import { getAboutPageApi, GetBlogsApi } from "../../services";
import moment from "moment";

function BlogHero() {
  const [hover, setHover] = useState<number | null>(1);
  const [selectedTag, setSelectedTag] = useState("All Articles");
  const { data: blogSection } = useQuery("blogs", GetBlogsApi);

  const filteredNews = blogSection?.industry_news?.filter(
    (item: { tags: Array<string> }) =>
      selectedTag === "All Articles"
        ? blogSection?.industry_news
        : item?.tags.some(
            (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
          )
  );
  const filteredArticle = blogSection?.latest_article?.filter(
    (item: { tags: Array<string> }) =>
      selectedTag === "All Articles"
        ? blogSection?.latest_article
        : item?.tags.some(
            (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
          )
  );
  // console.log(blogSection);

  return (
    <main className=" pt-16">
      <div className="flex flex-col lg:px-10 px-5 lg:max-w-[1500px] lg:mx-auto">
        <span className="text-[#002A7F] font-medium text-[80px]">Blog</span>
        <span className="text-[#002A7F] font-medium text-lg -mt-4">
          The latest on how we're revoluntizing private markets
        </span>
        <div className="flex gap-x-1 mt-4 w-full overflow-y-scroll">
          {tags.map((item, i) => (
            <div
              onClick={() => setSelectedTag(item?.title)}
              onMouseLeave={() => setHover(null)}
              onMouseEnter={() => {
                setHover(i);
              }}
              className={`min-w-fit ${
                hover === i || selectedTag === item?.title
                  ? "bg-[#0D0769]"
                  : "bg-[#8A8A7B1A]"
              } hover:cursor-pointer   px-3 h-full py-1  flex gap-1 items-end justify-center rounded-sm`}
            >
              <span
                className={` text-sm font-medium  ${
                  hover === i || selectedTag === item?.title
                    ? "text-white"
                    : "text-[#002B31]"
                }`}
              >
                {item.title}
              </span>
              {/* <span
                className={`text-xs font-medium  mb-1 ${
                  hover === i ? "text-white" : "text-primary-100"
                }`}
              >
                {item.limits}
              </span> */}
            </div>
          ))}
        </div>
      </div>
      {blogSection?.latest_article?.length > 0 && (
        <div className="mt-10 border-t border-b lg:px-10 px-5 py-10 flex items-start lg:flex-row flex-col lg:gap-x-10 gap-y-10 max-w-[1500px] lg:mx-auto">
          <img
            src={blogSection?.latest_article[0]?.featured_image}
            alt=""
            className="w-[600px] h-[400px] object-contain"
            loading="lazy"
          />
          <div className="w-[300px] flex flex-col gap-y-4 ">
            <div className="w-fit hover:bg-[#0D0769] cursor-pointer text-[#002B31] hover:text-white  px-3 h-full py-1 bg-[#8A8A7B1A] flex gap-1 items-end justify-center rounded-sm">
              <span className=" text-sm font-medium ">
                {blogSection?.latest_article[0]?.tags[0]}
              </span>
            </div>
            <span className="text-[#002A7F] font-medium text-3xl ">
              {blogSection?.latest_article[0]?.title}
            </span>

            <span className="text-[#1D2A29A6] text-xs">
              {moment(blogSection?.latest_article[0]?.created_at).format(
                "MMM D, YYYY"
              )}
              {/* <span className="text-[#002A7F] font-semibold">5 MIN READ</span> */}
            </span>
          </div>
        </div>
      )}

      {filteredArticle?.length > 0 && (
        <div className="lg:px-10 px-5 py-10 max-w-[1500px] lg:mx-auto">
          <div className="flex items-center gap-x-3">
            <img src="./icons/bkgrd.svg" className="w-[12px] h-[12px]" alt="" />
            <span className="text-[#002B31] text-[15.38px] font-normal">
              Latest articles
            </span>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
            {filteredArticle?.map(
              (item: {
                title: string;
                featured_image: string;
                created_at: string;
                id: string | number;
                tags: Array<string>;
              }) => (
                <Card data={item} key={item.id} />
              )
            )}
          </div>
        </div>
      )}
      {filteredNews?.length > 0 && (
        <div className="lg:px-10 px-5 py-10 max-w-[1500px] lg:mx-auto">
          <div className="flex items-center gap-x-3">
            <img src="./icons/bkgrd.svg" className="w-[12px] h-[12px]" alt="" />
            <span className="text-[#002B31] text-[15.38px] font-normal">
              Industry news
            </span>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
            {filteredNews?.map(
              (item: {
                title: string;
                featured_image: string;
                created_at: string;
                id: string | number;
                tags: Array<string>;
              }) => (
                <Card data={item} key={item.id} />
              )
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default BlogHero;
