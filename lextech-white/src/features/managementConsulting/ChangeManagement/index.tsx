import React, { useState } from "react";
import Layout from "../../../Layout";

import { useNavigate } from "react-router-dom";

import Articles from "../../../ui/articles";

function ChangeManagement() {
  const [onHover, setOnHover] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      label: "NAVIGATING ORGANISATIONAL CHANGE",
      content: (
        <div className="flex flex-col items-start leading-tight gap-y-4">
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
                  Change Readiness Assessment:
                </span>{" "}
                <br />
                Evaluating organizational readiness for
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
                  Stakeholder Engagement:
                </span>{" "}
                <br />
                Engaging key stakeholders to ensure alignment, support, and
                commitment to the change initiatives.{" "}
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
                  Communication Strategy:
                </span>{" "}
                <br />
                Developing a robust communication plan to convey the rationale,
                benefits, and impact of the proposed changes across the
                organization.{" "}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      label: "STRATEGY IMPLEMENTATION",
      content: (
        <div className="flex flex-col items-start leading-tight gap-y-4">
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
                  Process Optimization:
                </span>{" "}
                <br />
                Identifying inefficiencies and streamlining processes to
                maximize productivity and effectiveness.
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
                  Cultural Transformation:
                </span>{" "}
                <br />
                Instilling a culture of change acceptance and innovation within
                the organisation to adapt to evolving market demands{" "}
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
                  Reskilling and Training:
                </span>{" "}
                <br />
                Providing training programs to equip employees with the
                necessary skills to embrace new processes and technologies.{" "}
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      label: "SUSTAINING CHANGE AND MEASURING SUCCESS",
      content: (
        <div className="flex flex-col items-start leading-tight gap-y-4">
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
                  Performance Monitoring:
                </span>{" "}
                <br />
                Continuously monitoring the impact of changes and making
                necessary adjustments for optimal outcomes.{" "}
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
                  Feedback Mechanisms:
                </span>{" "}
                <br />
                Establishing feedback loops to gather insights from employees
                and stakeholders, fostering a culture of continuous improvement.{" "}
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
                  Change Adoption Metrics:
                </span>{" "}
                <br />
                Defining key performance indicators to measure the successful
                adoption and integration of changes.{" "}
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="flex justify-center">
          <img
            src="./assets/manageBg.png"
            className="w-[1511px] h-[392px] object-contain rounded"
            alt=""
          />
        </div>

        <div className="flex lg:flex-row flex-col  items-start mx-auto justify-center p-5 mt-5 gap-x-10  max-w-[1388px]">
          <div className="flex flex-col items-start justify-center ">
            <div className="w-[583px] ">
              <img
                src="./assets/CHG.png"
                className="max-w-[583px] h-[402px] object-contain"
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] text-[56.02px]">
                Change Management Solution
              </span>
            </div>

            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
              <p className="text-[#1D1E2A99] text-[16px] font-normal">
                Our Change Management services focus on helping businesses
                effectively manage the challenges of organisational
                transformation. We excel in devising approaches that encourage
                adaptability, resilience, and continued growth amidst change.
                Our methodology is based on thorough analysis, strategic
                planning, and seamless execution to ensure successful
                transitions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-col max-w-[1326px] mx-auto p-4 ">
          <div className="flex flex-col items-start leading-tight gap-y-4 my-4">
            <span className="text-[#002A7F] text-[39px]">
              Change Management Solution
            </span>
          </div>
          <div className="flex gap-x-32">
            {/* Sidebar Tabs */}
            <div className="flex flex-col w-[583px] mt-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`p-5 text-left w-auto h-[75px] ${
                    activeTab === tab.id
                      ? "bg-[#261EA6] text-white font-semibold h-[75px] "
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Tab Content */}

            <div className="flex p-6">
              <div className="text-lg font-medium">
                {tabs[activeTab].content}
              </div>
            </div>
          </div>

          {/* Tab Content */}
        </div>
      </div>

      <Articles />
    </Layout>
  );
}

export default ChangeManagement;
