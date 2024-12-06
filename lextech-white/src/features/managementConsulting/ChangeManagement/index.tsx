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
          {[
            {
              title: "Change Readiness Assessment:",
              description: "Evaluating organizational readiness for change.",
            },
            {
              title: "Stakeholder Engagement:",
              description:
                "Engaging key stakeholders to ensure alignment, support, and commitment to change initiatives.",
            },
            {
              title: "Communication Strategy:",
              description:
                "Developing a robust communication plan to convey the rationale, benefits, and impact of proposed changes.",
            },
          ].map((item, index) => (
            <div className="flex flex-row items-start gap-x-4" key={index}>
              <img
                src="./assets/check.svg"
                className="w-[30px] h-[30px]"
                alt=""
                loading="lazy"
              />
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                <span className="text-black text-[16px] font-bold">
                  {item.title}
                </span>
                <br />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 1,
      label: "STRATEGY IMPLEMENTATION",
      content: (
        <div className="flex flex-col items-start leading-tight gap-y-4">
          {[
            {
              title: "Process Optimization:",
              description:
                "Identifying inefficiencies and streamlining processes to maximize productivity.",
            },
            {
              title: "Cultural Transformation:",
              description:
                "Instilling a culture of change acceptance and innovation within the organization.",
            },
            {
              title: "Reskilling and Training:",
              description:
                "Providing training programs to equip employees with necessary skills.",
            },
          ].map((item, index) => (
            <div className="flex flex-row items-start gap-x-4" key={index}>
              <img
                src="./assets/check.svg"
                className="w-[30px] h-[30px]"
                alt=""
                loading="lazy"
              />
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                <span className="text-black text-[16px] font-bold">
                  {item.title}
                </span>
                <br />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      label: "SUSTAINING CHANGE AND MEASURING SUCCESS",
      content: (
        <div className="flex flex-col items-start leading-tight gap-y-4">
          {[
            {
              title: "Performance Monitoring:",
              description:
                "Continuously monitoring the impact of changes for optimal outcomes.",
            },
            {
              title: "Feedback Mechanisms:",
              description:
                "Establishing feedback loops to gather insights and foster continuous improvement.",
            },
            {
              title: "Change Adoption Metrics:",
              description:
                "Defining key performance indicators for successful adoption of changes.",
            },
          ].map((item, index) => (
            <div className="flex flex-row items-start gap-x-4" key={index}>
              <img
                src="./assets/check.svg"
                className="w-[30px] h-[30px]"
                alt=""
                loading="lazy"
              />
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                <span className="text-black text-[16px] font-bold">
                  {item.title}
                </span>
                <br />
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <div className="gap-x-5">

        <div className="flex justify-center">
          <img
            src="./assets/manageBg.png"
            className="w-[1511px] h-auto object-contain rounded"
            alt=""
          />
        </div>

        <div className="flex flex-col  lg:items-start items-center lg:justify-center justify-center p-5 mt-4 max-w-[1388px] mx-auto gap-x-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-10">
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:max-w-[540px]">
              <img
                src="./assets/CHG.png"
                className="w-[540px] h-auto object-contain"
                alt=""
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-y-10 w-auto p-3 whitespace-normal break-words">

            <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal">
              Change Management <br className="hidden lg:block"/> Solutions
              </span>
            </div>
              
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
              Our Change Management services focus on helping businesses
                  effectively manage organizational transformation challenges.
                  We devise approaches encouraging adaptability, resilience, and
                  growth amidst change.
              </p>
              </div>
          </div>

          <div className="w-auto lg:w-[770px] gap-y-5">
            <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4 mt-8">
              <span className="text-[#002A7F] lg:text-[39px] text-[30px] font-bold lg:font-normal mt-5 lg:mt-0">
                Change Management Solution
              </span>
            </div>

            <div className="flex gap-x-32 flex-col lg:flex-row lg:w-[1326px]">
              <div className="flex flex-col lg:w-[583px] w-auto  mt-12">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`p-5 text-left w-auto h-[75px] ${
                      activeTab === tab.id
                        ? "bg-[#261EA6] text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-y-10 mt-8 w-full lg:w-[671px] p-3">
                {/* <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                  Our Change Management services focus on helping businesses
                  effectively manage organizational transformation challenges.
                  We devise approaches encouraging adaptability, resilience, and
                  growth amidst change.
                </p> */}
                {tabs[activeTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ChangeManagement;
