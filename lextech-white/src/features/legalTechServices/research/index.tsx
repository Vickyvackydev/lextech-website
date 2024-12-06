import React, { useState } from "react";
import Layout from "../../../Layout";

import { useNavigate } from "react-router-dom";

import Articles from "../../../ui/articles";

function Search() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="flex justify-center">
          <img
            src="./assets/serviceBg.png"
            className="w-[1511px] h-[392px] object-contain rounded"
            alt=""
          />
        </div>

        <div className="flex lg:flex-row flex-col lg:items-center items-center lg:justify-center justify-center p-5 mt-4 w-auto mx-auto">
          <div className="flex flex-col-reverse lg:flex-col  items-center justify-center w-full lg:max-w-[668px]">
            <div className="w-full lg:max-w-[540px] h-auto">
              <img
                src="./assets/LSS.png"
                className="w-full lg:w-[540px] h-auto object-cover lg:object-contain"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="pl-5 whitespace-normal break-words">
              <p className="text-[17px] lg:text-[25.92px] whitespace-normal break-words">
                Get answers you can bank <br /> on{" "}
                <span className="font-bold"> WHEREVER YOU ARE</span> with just a
                few clicks!
              </p>

              <p className="text-[#1D1E2A99] text-[16px] font-normal mt-2 leading-[28.8px] whitespace-normal break-words">
                Let’s give you back your time – Cut down on time you spend on
                research; with the freed-up time you can focus on increasing
                productivity and other critical aspects of your work, or growing
                your practice.
              </p>
            </div>
          </div>

          <div className="mt-5 w-auto lg:w-[770px]">
            <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal">
                Legal Search Solution
              </span>
            </div>

            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3 whitespace-normal break-words">
              <p className="text-[#1D1E2A99] text-[16px] font-normal">
                Experience Legal Research at the speed of a click! Use
                Legalpedia for FAST and RELIABLE ANSWERS from the FINEST
                Editorial Team, to help you reduce TIME, COST and STRESS in your
                legal research.
              </p>
              <p className="text-[#1D1E2A99] text-[16px] font-normal">
                Effective research is fundamental to achieving success in legal
                practice. It is one critical activity that can be quite
                monotonous and tedious especially if done manually – going
                through tons of resources just to find some vital information.
              </p>

              <div className="flex flex-col items-start leading-tight gap-y-4">
                <div className="flex flex-row items-center gap-x-6 ">
                  <span className="">
                    <img
                      src="./assets/court.svg"
                      className="w-[35px] h-[35px]"
                      alt=""
                      loading="lazy"
                    />
                  </span>

                  <div>
                    <p className="text-[#1D1E2A99] text-[16px] font-normal">
                      <span className="text-[#000000] text-[25.92px] font-semibold">
                        Our legal search solution is
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-x-4 ">
                  <div className="">
                    <span className="w-[25px] h-[25px]">
                      <img
                        src="./assets/check.svg"
                        className="max-w-[30px] h-[30px]"
                        alt=""
                        loading="lazy"
                      />
                    </span>
                  </div>

                  <div className="">
                    <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px]">
                      Created to bring together ALL of the most critical
                      information in one place for you
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-x-4">
                  <div className="">
                    <span className="max-w-[25px] h-[25px]">
                      <img
                        src="./assets/check.svg"
                        className="max-w-[30px] h-[30px]"
                        alt=""
                        loading="lazy"
                      />
                    </span>
                  </div>

                  <div className="">
                    <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px]">
                      Updated on-the-go, to include the latest case law.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-x-4">
                  <div className="">
                    <span className="max-w-[25px] h-[25px]">
                      <img
                        src="./assets/check.svg"
                        className="max-w-[30px] h-[30px]"
                        alt=""
                        loading="lazy"
                      />
                    </span>
                  </div>

                  <div className="">
                    <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px]">
                      Compiled by experts who understand EXACTLY what you need
                      to fast track your research.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-start gap-x-4">
                  <div className="">
                    <span className="max-w-[25px] h-[25px]">
                      <img
                        src="./assets/check.svg"
                        className="max-w-[30px] h-[30px]"
                        alt=""
                        loading="lazy"
                      />
                    </span>
                  </div>

                  <div className="">
                    <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px]">
                      Condensed in a simple, clear and concise way – with
                      relevant legal information that you can apply within
                      seconds.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Articles />
    </Layout>
  );
}

export default Search;
