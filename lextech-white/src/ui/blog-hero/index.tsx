import React, { useState } from "react";
import { tags } from "../../constants";
import Card from "../../components/card";
import { useQuery } from "react-query";
import { GetBlogsApi } from "../../services";
import moment from "moment";

type Article = {
  title: string;
  featured_image: string;
  created_at: string;
  id: string | number;
  tags: string[];
};

type BlogSection = {
  latest_article: Article[];
  industry_news: Article[];
};

function BlogHero() {
  const [hover, setHover] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<string>("All Articles");

  const { data: blogSection } = useQuery<BlogSection>("blogs", GetBlogsApi);

  const filterArticles = (articles: Article[] | undefined) => {
    if (!articles) return [];
    return activeTag === "All Articles"
      ? articles
      : articles.filter((article) => article.tags.includes(activeTag));
  };

  const filteredLatestArticles = filterArticles(blogSection?.latest_article);
  const filteredIndustryNews = filterArticles(blogSection?.industry_news);

  return (
    <main className="pt-16">
      <div className="flex flex-col lg:px-10 px-5 lg:max-w-[1500px] lg:mx-auto">
        <span className="text-[#002A7F] font-medium text-[80px]">Blog</span>
        <span className="text-[#002A7F] font-medium text-lg -mt-4">
          The latest on how we're revolutionizing private markets
        </span>
        <div className="flex gap-x-1 mt-4 w-full overflow-y-scroll">
          {["All Articles", ...tags.map((tag) => tag.title)].map((tag, i) => (
            <div
              key={i}
              onClick={() => setActiveTag(tag)}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className={`min-w-fit ${
                hover === i || activeTag === tag
                  ? "bg-[#0D0769]"
                  : "bg-[#8A8A7B1A]"
              } hover:cursor-pointer px-3 h-full py-1 flex gap-1 items-end justify-center rounded-sm`}
            >
              <span
                className={`text-sm font-medium ${
                  hover === i || activeTag === tag ? "text-white" : "text-[#002B31]"
                }`}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {filteredLatestArticles.length > 0 && (
        <div className="mt-10 border-t border-b lg:px-10 px-5 py-10 flex items-start lg:flex-row flex-col lg:gap-x-10 gap-y-10 max-w-[1500px] lg:mx-auto">
          <img
            src={filteredLatestArticles[0]?.featured_image}
            alt=""
            className="w-[600px] h-[400px] object-contain"
            loading="lazy"
          />
          <div className="w-[300px] flex flex-col gap-y-4">
            <div className="w-fit hover:bg-[#0D0769] cursor-pointer text-[#002B31] hover:text-white px-3 h-full py-1 bg-[#8A8A7B1A] flex gap-1 items-end justify-center rounded-sm">
              <span className="text-sm font-medium">
                {filteredLatestArticles[0]?.tags[0]}
              </span>
            </div>
            <span className="text-[#002A7F] font-medium text-3xl">
              {filteredLatestArticles[0]?.title}
            </span>
            <span className="text-[#1D2A29A6] text-xs">
              {moment(filteredLatestArticles[0]?.created_at).format("MMM D, YYYY")}
            </span>
          </div>
        </div>
      )}

      {filteredLatestArticles.length > 0 && (
        <div className="lg:px-10 px-5 py-10 max-w-[1500px] lg:mx-auto">
          <div className="flex items-center gap-x-3">
            <img src="./icons/bkgrd.svg" className="w-[12px] h-[12px]" alt="" />
            <span className="text-[#002B31] text-[15.38px] font-normal">
              Latest articles
            </span>
          </div>

          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
            {filteredLatestArticles.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      )}

      {filteredIndustryNews.length > 0 && (
        <div className="lg:px-10 px-5 py-10 max-w-[1500px] lg:mx-auto">
          <div className="flex items-center gap-x-3">
            <img src="./icons/bkgrd.svg" className="w-[12px] h-[12px]" alt="" />
            <span className="text-[#002B31] text-[15.38px] font-normal">
              Industry news
            </span>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
            {filteredIndustryNews.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default BlogHero;