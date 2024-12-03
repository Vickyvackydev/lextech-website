import React, { useState } from "react";
import Layout from "../../../Layout";
import { Transition } from "@headlessui/react";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import LegalServices from "../../../ui/legalServices";
import Articles from "../../../ui/articles";

function Icase() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="flex justify-center">
        <img
          src="./assets/manageBg.png"
          className="w-auto max-h-[392px] object-cover rounded"
          alt=""
              />
        </div>
        
              
              <div className="flex lg:flex-row flex-col lg:items-start items-center lg:justify-center justify-center p-5 mt-4  max-w-[1388px] mx-auto">
         <img
          src="./assets/icasePic.png"
          className="w-[540px] h-auto object-contain"
          alt=""
          loading="lazy"
                  />
                     <div className="w-auto lg:w-[770px] gap-y-3">
          <div className="flex flex-col items-center  lg:items-start leading-tight gap-y-2 lg:gap-y-4">
        
            <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal">
              Innovative Case Management <br />System (iCASEFLOW)
            </span>
          </div>

          <div className="flex flex-col gap-y-10 mt-8 w-auto p-3 whitespace-normal break-words">
            <p className="text-[#1D1E2A99] text-[16px] font-normal">
            Our Innovative Case Management System (iCASEFLOW) for the Court/Police/Ministry of Justice, automates workflow processes for these and other stakeholders by eliminating bottlenecks that hamper speed, efficiency, accuracy and high productivity.
              </p>
              
            <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[758px]">
            iCASEFLOW eliminates manual filings, and automates the process of filing cases from initiation up to assignment of cases to the Court.
            </p>

            <p className="text-[#1D1E2A99] text-[16px] font-normal max-w-[758px]">
            Features:            
            </p>

              
<div className="flex flex-row items-start gap-x-1">
  <div className="max-w-[30px]  h-[20px]">
    <img
      src="./assets/check.svg"
      className="max-w-[25px]  h-full"
      alt="Check icon"
      loading="lazy"
    />
  </div>

  <div>
    <p className="text-gray-600 text-[16px] font-normal max-w-[732px]">
      <span className="text-black text-[16px] font-bold">e-Registry</span> <br />
      Registry staff easily receive and review all cases filed through the electronic filing system after confirmation of payment. Cases approved as properly filed are electronically presented to the Chief Judge for assignment. When electronically assigned by the Chief Judge, these cases are transferred to the electronic docket of the designated courts for adjudication.
    </p>
  </div>
</div>
              

  <div className="flex flex-row items-start gap-x-1">
  <div className="max-w-[30px]  h-[20px]">
    <img
      src="./assets/check.svg"
      className="max-w-[25px]  h-full"
      alt="Check icon"
      loading="lazy"
    />
  </div>

  <div>
    <p className="text-gray-600 text-[16px] font-normal max-w-[732px]">
      <span className="text-black text-[16px] font-bold">e-Courts</span> <br />
      The e-Court system enables the honourable Judges to gain access to the
      electronic case files of cases assigned to their courts. Directions by
      the Court as to court sitting dates and time, including notice of
      adjournments, are easily forwarded to litigants/counsel from time to
      time.
    </p>
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

export default Icase;