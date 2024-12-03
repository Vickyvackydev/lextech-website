import React, { useState } from "react";
import Layout from "../../../Layout";

import { useNavigate } from "react-router-dom";

import Articles from "../../../ui/articles";

function ProjectManagement() {
  const [onHover, setOnHover] = useState(false);
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

        <div className="flex lg:flex-row flex-col  items-start mx-auto justify-center p-5 mt-5 gap-x-5  max-w-[1388px]">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[540px] ">
              <img
                src="./assets/PMG.png"
                className="max-w-[540px] h-[579px] object-contain"
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] text-[56.02px]">
                Project Management Solution
              </span>
            </div>

            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
              <p className="text-[#1D1E2A99] text-[16px] font-normal">
                The Project Management division of LexTech Ecosystems serves as
                a cornerstone, ensuring the seamless execution of initiatives
                from inception to completion. We specialize in providing
                end-to-end project management services that guarantee
                efficiency, effectiveness, and successful outcomes for our
                clients.
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
                        Our Services
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-start gap-x-4 ">
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
                    <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                      <span className="text-black text-[16px] font-bold">
                        Market Analysis:
                      </span>{" "}
                      <br />
                      Meticulously developing detailed project plans,
                      establishing clear objectives, setting precise timelines,
                      and strategizing effective resource allocation to lay a
                      solid foundation for project success
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
                    <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                      <span className="text-black text-[16px] font-bold">
                        Coordination and Execution:
                      </span>{" "}
                      <br />
                      Skillfully coordinating all project elements, ensuring
                      seamless integration and execution of tasks. We adapt
                      swiftly to challenges, maintaining project momentum and
                      aligning outcomes with our clients’ strategic objectives.{" "}
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

export default ProjectManagement;
