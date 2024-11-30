import React, { useState } from "react";
import Layout from "../../../Layout";
import { Transition } from "@headlessui/react";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";
import Articles from "../../../ui/articles";


function Verbatim() {
  const [onHover, setOnHover] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="flex justify-center">
        <img
          src="./assets/serviceBg.png"
          className="max-w-[1511px] h-[392px] object-contain rounded "
          alt=""
              />
        </div>
        
              
              <div className="flex lg:flex-row flex-col lg:items-start items-start lg:justify-center justify-evenly p-5 mt-4 max-w-[1388px] mx-auto">
         <img
          src="./assets/VRA.png"
          className="max-w-[540px] h-[579px] object-contain"
          alt=""
          loading="lazy"
                  />
                  <div  className="max-w-[758px] min-w-[540px]">
          <div className="flex flex-col items-start leading-tight gap-y-4">
        
            <span className="text-[#002A7F] text-[56.02px] sm:text-[20px]">
             Verbatim Reporting Academy
            </span>
          </div>

          <div className="flex flex-col gap-y-10 mt-8 w-auto p-3">
            <p className="text-[#1D1E2A99] text-[16px] font-normal">
            Our Verbatim Reporting Academy strives to rank among the best providers of high-quality training and certification of Verbatim Court Reporters and scopists, and providing ancillary services towards improving efficiency and speed in the administration of justice in Nigeria, Africa and the world.
            </p>
              
             

              
              <div className="flex flex-col items-start leading-tight gap-y-4">
              <div className="flex flex-row items-center gap-x-1 ">
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
                          
                          <span className="text-[#000000] text-[16px] font-bold">
                          Our Services     
                       </span>               
                       </p>
                            
             </div>                      
              </div>
                
              <div className="flex flex-row items-center gap-x-1 ">
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
                              Training and certification of verbatim court reporters and scopists            
                              </p>
                </div>   
                            
              </div>
              
              <div className="flex flex-row items-center gap-x-1">
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
                Setting up courts to utilise computer Aided Transcription (CAT)software for higher efficiency and speed in the administration of Justice.           
                </p>
                </div>   
              </div>
                   

              <div className="flex flex-row items-center gap-x-1">
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
              We also provide remote deposition, court reporting and transcription services for clients.     
                </p>
                </div>   
            </div> 
</div>



       

           

           


              
         

   
          
          </div>
        </div>
       
      </div>

      <div className="flex flex-col items-start leading-tight gap-y-4 p-6 max-w-[1388px] mx-auto">
      <span className="text-xl font-normal text-[17.44px] text-[#002A7F]">
          Training
          </span>
          
        <p className="text-[#002A7F] text-[35.18px] sm:text-[15.18px]  text-left">
        Our Academy trains and certifies a large pool of verbatim reporters<br className="hidden sm:block" />and scopists to serve both the Nigerian and African markets
          </p>
          
          <div className="flex flex-col lg:flex-row items-start justify-items-center gap-y-4 p-6 gap-x-5">
            <div className="">
              <div>
              <img
          src="./assets/v1.png"
          className="max-w-[654px] h-[454px] object-contain"
          alt=""
          loading="lazy"
                  />
              </div>
              <div className= "flex flex-col gap-y-5 w-[654px] mt-5 text-[#002A7F]">
                <p>. Our skilled verbatim reporters with advanced CAT systems capture entire proceedings during depositions and court sessions. With a court reporter, the judge can pay more attention to demeanor during proceedings and manage the court without undue distraction and stress of writing in longhand.</p>

                <p>
                . Health challenges that could lead to surgeries arising from long hours of sitting and writing are eliminated for the judge.
                </p>

                <p>
                . Time spent in court proceedings is drastically reduced thereby fast-tracking adjudication and justice delivery.
                </p>
          </div>
            </div>

            <div className="">
            <img
          src="./assets/v2.png"
          className="max-w-[654px] h-[454px] object-contain"
          alt=""
          loading="lazy"
                  />

<div className= "flex flex-col gap-y-5 w-[654px] mt-5 text-[#002A7F]">
                <p>. Verbatim reporting makes available accurate records ofcourt proceedings from recorded audios. This assures the judge, lawyers, and their clients of the accuracy of the records of the proceedings.</p>

                <p>
          
            . The audio synchronization of our CAT system guarantees the integrity and 100% accuracy of court transcripts, thus enhancing the speed and quality of justice.
                </p>

      
          </div>
            </div>
        </div>

      </div>
        
    </div>
        
      <Articles />
    </Layout>
  );
}

export default Verbatim;