import React, { useState } from "react";
import Layout from "../../../Layout";
import { useNavigate } from "react-router-dom";
import Articles from "../../../ui/articles";

function Icase() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        {/* Header Image */}
        <div className="flex justify-center">
          <img
            src="./assets/serviceBg.png"
          className="w-[1511px] h-[200px] lg:h-[392px] object-contain rounded"
            alt="Service Background"
          />
        </div>

        {/* Main Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center lg:justify-center justify-center p-5 mt-4   gap-x-5 ">
          {/* <img
            src="./assets/icasePic.png"
            className="max-w-[540px] h-auto lg:h-[579px] object-contain mt-3"
            alt="iCaseFlow"
            loading="lazy"
          /> */}

            <div className="flex flex-col items-center lg:items-start justify-center">
              <img
                src="./assets/icasePic.png"
                className="w-[540px] h-auto object-contain"
                alt=""
                loading="lazy"
              />
            </div>
          <div className="w-auto lg:w-[770px]">
            {/* Title */}
            <div className="flex flex-col items-center lg:items-start  leading-tight gap-y-4">
              <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal mt-8 lg:mt-0">
                Innovative Case Management <br className="hidden lg:block" />
                System (iCASEFLOW)
              </span>
            </div>
            {/* Description */}
            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                Our Innovative Case Management System (iCASEFLOW) for the
                Court/Police/Ministry of Justice automates workflow processes
                for these and other stakeholders by eliminating bottlenecks that
                hamper speed, efficiency, accuracy, and high productivity.
              </p>
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                iCASEFLOW eliminates manual filings, and automates the process
                of filing cases from initiation up to assignment of cases to the
                Court.
              </p>

              {/* Features */}
              <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[758px]">
                Features:
              </p>

              {/* Feature 1 */}
              <div className="flex flex-row items-start gap-x-1">
                <div className="max-w-[30px] h-[20px]">
                  <img
                    src="./assets/check.svg"
                    className="max-w-[25px] h-full"
                    alt="Check icon"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-[16px] font-normal max-w-[732px] whitespace-normal break-words">
                    <span className="text-black text-[16px] font-bold">
                      e-Registry
                    </span>{" "}
                    <br />
                    Registry staff easily receive and review all cases filed
                    through the electronic filing system after confirmation of
                    payment. Cases approved as properly filed are electronically
                    presented to the Chief Judge for assignment. When
                    electronically assigned by the Chief Judge, these cases are
                    transferred to the electronic docket of the designated
                    courts for adjudication.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-row items-start gap-x-1">
                <div className="max-w-[30px] h-[20px]">
                  <img
                    src="./assets/check.svg"
                    className="max-w-[25px] h-full"
                    alt="Check icon"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-[16px] font-normal lg:max-w-[732px] w-full whitespace-normal break-words">
                    <span className="text-black text-[16px] font-bold">
                      e-Courts
                    </span>{" "}
                    <br />
                    The e-Court system enables the honourable Judges to gain
                    access to the electronic case files of cases assigned to
                    their courts. Directions by the Court as to court sitting
                    dates and time, including notice of adjournments, are easily
                    forwarded to litigants/counsel from time to time.
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

export default Icase;
