import React, { useState } from "react";
import Layout from "../../../Layout";
import { Transition } from "@headlessui/react";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import LegalServices from "..";
import Articles from "../../../ui/articles";

function TechConsult() {
  const [onHover, setOnHover] = useState(false);
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
        
              
          <div className="flex lg:flex-row flex-col   lg:items-start items-center  mx-auto justify-center p-5 mt-5  max-w-[1388px]">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[540px] ">
            <img
          src="./assets/TCons.png"
          className="max-w-[540px] h-[579px] object-contain"
          alt=""
          loading="lazy"
                  />
            </div>

          </div>
  
                  <div className="mt-5">
          <div className="flex flex-col items-center lg:items-start leading-tight gap-y-4">
        
            <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal mt-8 lg:mt-0">
            Tech Consulting Solutions
            </span>
          </div>

          <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
            <p className="text-[#1D1E2A99] text-[16px] font-normal">
           We serve as a guide for clients navigating the complex terrain of technological advancements. We offer comprehensive strategies and solutions that empower businesses to harness cutting-edge technologies effectively. Our goal is to seamlessly integrate these advancements into existing frameworks, driving operational efficiency and sustainable growth.
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
                <span className="text-black text-[16px] font-bold"> Created to bNeeds Assessments (Consultation):</span> <br />
      Registry staff easily receive and review all cases filed through the electronic filing system after confirmation of payment. Cases approved as properly filed are electronically presented to the Chief Judge for assignment. When electronically assigned by the Chief Judge, these cases are transferred to the electronic docket of the designated courts for adjudication.
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
                <span className="text-black text-[16px] font-bold"> Technology Roadmapping:</span> <br />
                Creating a clear, achievable plan outlining the integration of new technologies and their 
                impact on your business processes. 
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
                <span className="text-black text-[16px] font-bold"> Technology Implementation:</span> <br />
                Executing seamless integration of solutions to optimise your business operations.
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

export default TechConsult;