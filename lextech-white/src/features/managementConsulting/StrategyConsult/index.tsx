import React, { useState } from "react";
import Layout from "../../../Layout";
import { Transition } from "@headlessui/react";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import LegalServices from "..";
import Articles from "../../../ui/articles";

function StrategyConsult() {
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
        
              
          <div className="flex lg:flex-row flex-col  items-start mx-auto justify-center p-5 mt-5  max-w-[1388px]">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-[540px] ">
            <img
          src="./assets/SCons.png"
          className="max-w-[540px] h-[579px] object-contain"
          alt=""
          loading="lazy"
                  />
            </div>

          </div>
  
                  <div className="mt-5">
          <div className="flex flex-col items-start leading-tight gap-y-4">
        
            <span className="text-[#002A7F] text-[56.02px]">
            Strategy Consulting Solutions
            </span>
          </div>

          <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
            <p className="text-[#1D1E2A99] text-[16px] font-normal">
            LexTech Ecosystems brings a wealth of expertise in Strategy Consulting, crafting bespoke strategies that drive sustainable success for businesses across diverse industries. Our commitment lies in meticulously analysing market dynamics, competition, and future trends to develop strategic roadmaps tailored to your organization’s unique needs.
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
                <span className="text-black text-[16px] font-bold">Market Analysis:</span> <br />
                Conducting in-depth market research to understand industry trends, consumer behaviour, and competitive landscapes.
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
                <span className="text-black text-[16px] font-bold">Strategy Implementation:</span> <br />
                Providing guidance and support to ensure seamless execution of the devised strategies.
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
                <span className="text-black text-[16px] font-bold">Strategy Development:</span> <br />
                Devising comprehensive strategies encompassing market penetration, product development, diversification, and more.
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

export default StrategyConsult;