import React, { useState } from "react";
import Layout from "../../../Layout";
import { useNavigate } from "react-router-dom";
import Articles from "../../../ui/articles";

function ProjectManagement() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col justify-center max-w-auto mx-auto gap-x-8">
        {/* Background Image */}
        <div className="flex justify-center">
          <img
            src="./assets/manageBg.png"
            className="w-[1511px] h-[200px] lg:h-[392px] object-contain rounded"
            alt=""
          />
        </div>

        {/* Content Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center lg:justify-center justify-center p-5 mt-4   gap-x-5">
          {/* Left Section - Image */}
          <div className="flex flex-col items-center lg:items-start justify-center">
            <div className="w-full lg:max-w-[540px] h-auto">
              <img
                src="./assets/PMG.png"
                className="w-[540px] h-auto object-contain"
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-auto lg:w-[770px]">
            {/* Title */}
            <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal mt-8 lg:mt-0">
                Project Management Solution
              </span>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                The Project Management division of LexTech Ecosystems serves as
                a cornerstone, ensuring the seamless execution of initiatives
                from inception to completion. We specialize in providing
                end-to-end project management services that guarantee
                efficiency, effectiveness, and successful outcomes for our
                clients.
              </p>

              {/* Services */}
              <div className="flex flex-col items-start leading-tight gap-y-4">
                {/* Service Item */}
                <div className="flex flex-row items-center gap-x-6">
                  <img
                    src="./assets/court.svg"
                    className="w-[35px] h-[35px]"
                    alt=""
                    loading="lazy"
                  />
                  <p className="text-[#1D1E2A99] text-[16px] font-normal">
                    <span className="text-[#000000] text-[25.92px] font-semibold">
                      Our Services
                    </span>
                  </p>
                </div>

                {/* Service Details */}
                <div className="flex flex-row items-start gap-x-4">
                  <img
                    src="./assets/check.svg"
                    className="max-w-[30px] h-[30px]"
                    alt=""
                    loading="lazy"
                  />
                  <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                    <span className="text-black text-[16px] font-bold">
                      Market Analysis:
                    </span>
                    <br />
                    Meticulously developing detailed project plans, establishing
                    clear objectives, setting precise timelines, and
                    strategizing effective resource allocation to lay a solid
                    foundation for project success.
                  </p>
                </div>

                <div className="flex flex-row items-start gap-x-4">
                  <img
                    src="./assets/check.svg"
                    className="max-w-[30px] h-[30px]"
                    alt=""
                    loading="lazy"
                  />
                  <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                    <span className="text-black text-[16px] font-bold">
                      Coordination and Execution:
                    </span>
                    <br />
                    Skillfully coordinating all project elements, ensuring
                    seamless integration and execution of tasks. We adapt
                    swiftly to challenges, maintaining project momentum and
                    aligning outcomes with our clients’ strategic objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <Articles />
    </Layout>
  );
}

export default ProjectManagement;
