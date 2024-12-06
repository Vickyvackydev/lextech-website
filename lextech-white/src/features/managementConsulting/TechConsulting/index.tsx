import React, { useState } from "react";
import Layout from "../../../Layout";
import { useNavigate } from "react-router-dom";
import Articles from "../../../ui/articles";

function TechConsult() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Image */}
      <div className="flex justify-center">
        <img
          src="./assets/manageBg.png"
          className="w-[1511px] h-[392px] object-contain rounded"
          alt="Manage Background"
        />
      </div>

      {/* Content Section */}
      <div className=" flex mt-7">
        <img
          src="./assets/TCons.png"
          className="max-w-[540px] h-[579px] object-contain mt-3"
          alt="Tech Consulting"
          loading="lazy"
        />

        {/* Features Section */}
        <div className="mt-5">
          <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4">
            <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal mt-8 lg:mt-0">
              Tech Consulting Solutions
            </span>
          </div>

          <div className="flex flex-col items-start leading-tight gap-y-4">
            {/* Feature 1 */}
            <div className="flex flex-row items-center gap-x-6">
              <img
                src="./assets/court.svg"
                className="w-[35px] h-[35px]"
                alt="Court Icon"
                loading="lazy"
              />
              
              <p className="text-[#1D1E2A99] text-[16px] font-normal">
                <span className="text-[#000000] text-[25.92px] font-semibold">
                  Our legal search solution is
                </span>
              </p>
            </div>

            {/* Feature 2 */}
            <Feature
              icon="./assets/check.svg"
              title="Needs Assessments (Consultation):"
              description="Registry staff easily receive and review all cases filed through the electronic filing system after confirmation of payment. Cases approved as properly filed are electronically presented to the Chief Judge for assignment. When electronically assigned by the Chief Judge, these cases are transferred to the electronic docket of the designated courts for adjudication."
            />

            {/* Feature 3 */}
            <Feature
              icon="./assets/check.svg"
              title="Technology Roadmapping:"
              description="Creating a clear, achievable plan outlining the integration of new technologies and their impact on your business processes."
            />

            {/* Feature 4 */}
            <Feature
              icon="./assets/check.svg"
              title="Technology Implementation:"
              description="Executing seamless integration of solutions to optimise your business operations."
            />
          </div>
        </div>
      </div>

      <Articles />
    </Layout>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-start gap-x-4">
      <img
        src={icon}
        className="max-w-[30px] h-[30px]"
        alt="Feature Icon"
        loading="lazy"
      />
      <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
        <span className="text-black text-[16px] font-bold">{title}</span>
        <br />
        {description}
      </p>
    </div>
  );
}

export default TechConsult;
