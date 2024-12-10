import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../Layout";
import Articles from "../../../ui/articles";

function StrategyConsult() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="gap-x-5">
        {/* Background Image */}
        <div className="flex justify-center">
          <img
            src="./assets/manageBg.png"
            className="w-[1511px] h-[200px] lg:h-[392px] object-contain rounded"
            alt=""
          />
        </div>

        {/* Content Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center lg:justify-center justify-center p-5 mt-4 max-w-[1388px] mx-auto gap-x-4">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:max-w-[540px] h-auto">
            <img
              src="./assets/SCons.png"
              className="w-[540px] h-auto object-contain"
              alt=""
              loading="lazy"
            />
          </div>

          {/* Right Section */}
          <div className="w-auto lg:w-[770px] gap-y-3">
            {/* Title */}
            <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal">
                Strategy Consulting Solutions
              </span>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3 whitespace-normal break-words">
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                LexTech Ecosystems brings a wealth of expertise in Strategy
                Consulting, crafting bespoke strategies that drive sustainable
                success for businesses across diverse industries. Our commitment
                lies in meticulously analysing market dynamics, competition, and
                future trends to develop strategic roadmaps tailored to your
                organization’s unique needs.
              </p>

              {/* Key Points */}
              <div className="flex flex-col items-start leading-tight gap-y-4">
                {/* Individual Items */}
                {[
                  {
                    icon: "./assets/court.svg",
                    title: "Our legal search solution is",
                    description: null,
                  },
                  {
                    icon: "./assets/check.svg",
                    title: "Market Analysis",
                    description:
                      "Conducting in-depth market research to understand industry trends, consumer behaviour, and competitive landscapes.",
                  },
                  {
                    icon: "./assets/check.svg",
                    title: "Strategy Implementation",
                    description:
                      "Providing guidance and support to ensure seamless execution of the devised strategies.",
                  },
                  {
                    icon: "./assets/check.svg",
                    title: "Strategy Development",
                    description:
                      "Devising comprehensive strategies encompassing market penetration, product development, diversification, and more.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-start gap-x-4"
                  >
                    <span className="max-w-[30px] h-[30px]">
                      <img
                        src={item.icon}
                        className="max-w-[30px] h-[30px]"
                        alt=""
                        loading="lazy"
                      />
                    </span>
                    <div>
                      {item.title && (
                        <p className="text-black text-[16px] font-bold">
                          {item.title}
                        </p>
                      )}
                      {item.description && (
                        <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Articles />
    </Layout>
  );
}

export default StrategyConsult;
