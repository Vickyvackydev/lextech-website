import React, { useState } from "react";
import Layout from "../../../Layout";

import { useNavigate } from "react-router-dom";
import Articles from "../../../ui/articles";
import { Transition } from "@headlessui/react";

function Verbatim() {
  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col justify-center max-w-auto mx-auto">
        <div className="hidden md:flex justify-center ">
          <img
            src="./assets/serviceBg.png"
            className="w-auto max-h-[392px] object-cover rounded"
            alt=""
          />
        </div>

        <div className="flex lg:flex-row flex-col lg:items-center items-center lg:justify-center justify-center p-5 mt-4 w-auto mx-auto">
          <img
            src="./assets/VRA.png"
            className="w-full lg:max-w-[540px] h-auto object-cover"
            alt=""
            loading="lazy"
          />
          <div className="w-auto lg:w-[770px]">
            <div className="flex flex-col items-start leading-tight gap-y-4">
              <span className="text-[#002A7F] lg:text-[56.02px] text-[30px] font-bold lg:font-normal">
                Verbatim Reporting Academy
              </span>
            </div>

            <div className="flex flex-col gap-y-10 mt-8 w-auto p-3 whitespace-normal break-words">
              <p className="text-[#1D1E2A99] text-normal text-[16px] font-normal max-w-[734px] leading-[28.8px]">
                Our Verbatim Reporting Academy strives to rank among the best
                providers of high-quality training and certification of Verbatim
                Court Reporters and scopists, and providing ancillary services
                towards improving efficiency and speed in the administration of
                justice in Nigeria, Africa and the world.
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
                      Training and certification of verbatim court reporters and
                      scopists
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
                      Setting up courts to utilise computer Aided Transcription
                      (CAT)software for higher efficiency and speed in the
                      administration of Justice.
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
                      We also provide remote deposition, court reporting and
                      transcription services for clients.
                    </p>
                  </div>
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
                    Training and certification of verbatim court reporters and
                    scopists
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
                    Setting up courts to utilise computer Aided Transcription
                    (CAT)software for higher efficiency and speed in the
                    administration of Justice.
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
                    We also provide remote deposition, court reporting and
                    transcription services for clients.
                  </p>
                </div>
              </div>

              <button
                onMouseEnter={() => setOnHover(true)}
                onMouseLeave={() => setOnHover(false)}
                className="bg-[#261EA6] hover:scale-95 transition-all duration-300 w-[323px] text-center px-5 py-3 lg:h-[58px] h-[50px] rounded-3xl gap-x-4 flex items-center justify-center"
                type="button"
              >
                <span className="bg-clip-text text-center lg:text-[23px] text-[23px]text-transparent transition-all duration-300 text-[#FFFFFF] bg-[#FFFFFF]">
                  Sign Up
                </span>

                <Transition
                  show={onHover}
                  enter="transform transition-transform ease-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition-transform ease-in duration-200"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <img
                    src="./icons/arrow.svg"
                    alt=""
                    className={`w-[20px] h-[27px] object-contain mt-2`}
                  />
                </Transition>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[1440px] flex flex-col items-start leading-tight gap-y-4 p-6 mw-auto mx-auto  whitespace-normal break-words">
          <span className="text-xl font-normal text-[17.44px] text-[#002A7F]">
            Training
          </span>

          <p className="text-[#002A7F] md:text-[35.18px] font-bold md:font-normal  text-[15px]  text-left  whitespace-normal break-words">
            Our Academy trains and certifies a large pool of verbatim reporters
            <br className="hidden sm:block" />
            and scopists to serve both the Nigerian and African markets
          </p>

          <div className="flex flex-col xl:flex-row items-start justify-items-center gap-y-4 p-6 gap-x-5">
            <div className=" w-full lg:max-w-[668px]">
              <div>
                <img
                  src="./assets/v1.png"
                  className="w-full lg:w-[668px] h-auto object-cover"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-y-5 w-auto whitespace-normal break-words mt-5 text-[#002A7F]">
                <p className=" whitespace-normal break-words">
                  . Our skilled verbatim reporters with advanced CAT systems
                  capture entire proceedings during depositions and court
                  sessions. With a court reporter, the judge can pay more
                  attention to demeanor during proceedings and manage the court
                  without undue distraction and stress of writing in longhand.
                </p>

                <p className=" whitespace-normal break-words">
                  . Health challenges that could lead to surgeries arising from
                  long hours of sitting and writing are eliminated for the
                  judge.
                </p>

                <p className=" whitespace-normal break-words">
                  . Time spent in court proceedings is drastically reduced
                  thereby fast-tracking adjudication and justice delivery.
                </p>

                <p>
                  . Time spent in court proceedings is drastically reduced
                  thereby fast-tracking adjudication and justice delivery.
                </p>
              </div>
            </div>

            <div className="w-full lg:max-w-[668px]">
              <img
                src="./assets/v2.png"
                className="w-full lg:max-w-[668px] h-auto object-cover lg:object-contain"
                alt=""
                loading="lazy"
              />

              <div className="flex flex-col gap-y-5 w-auto mt-5 text-[#002A7F] whitespace-normal break-words">
                <p className=" whitespace-normal break-words">
                  . Verbatim reporting makes available accurate records ofcourt
                  proceedings from recorded audios. This assures the judge,
                  lawyers, and their clients of the accuracy of the records of
                  the proceedings.
                </p>

                <p className=" whitespace-normal break-words">
                  . The audio synchronization of our CAT system guarantees the
                  integrity and 100% accuracy of court transcripts, thus
                  enhancing the speed and quality of justice.
                </p>

                <p>
                  . The audio synchronization of our CAT system guarantees the
                  integrity and 100% accuracy of court transcripts, thus
                  enhancing the speed and quality of justice.
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
