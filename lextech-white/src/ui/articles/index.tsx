import React from "react";
import { articles } from "../../constants";
import Card from "../../components/card";
import { useQuery } from "react-query";
import { GetBlogsApi } from "../../services";

function Articles() {
  const { data: blogSection } = useQuery("blogs", GetBlogsApi);
  return (
    <main className="lg:px-10 px-5 pt-28">
      <div className="flex flex-col items-start">
        <span className="text-xl font-normal text-[17.44px] text-[#002B31]">
          Resources
        </span>
        <span className="lg:text-[55.66px] text-5xl text-[#002A7F] leading-tight">
          Latest <br /> articles
        </span>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4 mt-5">
          {blogSection?.latest_article.length > 0 &&
            blogSection?.latest_article.map(
              (item: {
                title: string;
                featured_image: string;
                date_created: string;
                id: string | number;
                tags: Array<string>;
              }) => <Card data={item} key={item.id} />
            )}
        </div>
      </div>
    </main>
  );
}

export default Articles;
