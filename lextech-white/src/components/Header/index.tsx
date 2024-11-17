import React, { useState } from "react";
import Logo from "../Logo";
import Button from "../button";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  dropBox,
  setDropBox,
  setSlideOpen,
  slideOpen,
} from "../../states/slices/globalstateReducer";
import IcaseFlow from "../../ui/panels/icase-flow";
import Verbatim from "../../ui/panels/verbatim";
import Eprobate from "../../ui/panels/e-probate";
import Affidavit from "../../ui/panels/afidafit";
import Emoj from "../../ui/panels/e-moj";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks";

function Header() {
  const mobileScreen = useMediaQuery("(max-width: 640px)");
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [initialSlide, setInitialSlide] = useState("product");
  const [slide, setSlide] = useState<string | null>(null);
  const showpanel = useSelector(slideOpen);
  const dropbox = useSelector(dropBox);
  const dispatch = useDispatch();

  const handleClosePanel = () => {
    dispatch(setSlideOpen(false));
    setSlide(null);
  };
  const showSlides = (str: string) => {
    dispatch(setSlideOpen(true));
    setSlide(str);
    setInitialSlide("product");
  };

  return (
    <>
      {mobileScreen ? (
        <div className="w-full fixed py-4 px-3 z-30 left-0 top-0 right-0 bg-white border-b border-[#999F9933] ">
          <div className="flex justify-between items-center">
            <Logo />
            {menu ? (
              <FaTimes
                size={15}
                color="#002A7F"
                onClick={() => setMenu(false)}
              />
            ) : (
              <FaBars
                size={15}
                color="#002A7F"
                onClick={() => {
                  setMenu(true);
                  setSubMenu(false);
                }}
              />
            )}
          </div>
          <Transition
            show={menu}
            enter="transform transition-transform ease-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="-translate-x-0"
            leave="transform transition-transform ease-in duration-200"
            leaveFrom="-translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="bg-white shadow-md px-5 pt-4 absolute w-full h-[265px] left-0 right-0 top-[4.2rem]">
              <ul className="flex flex-col  gap-y-5 items-start text-primary-200">
                <Link
                  to={"/"}
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  About Us
                </Link>
                <li
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                  onClick={() => {
                    setSubMenu(true);
                    setMenu(false);
                  }}
                >
                  Solution
                </li>
                <Link
                  to="/blog"
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  Contact
                </Link>
              </ul>
              {/* <Button
                title="Contact sales"
                textStyle="text-white text-md"
                handleClick={() => navigate("/contact")}
                icon=""
                btnStyles={`bg-primary-200 rounded-lg mt-5`}
              /> */}
            </div>
          </Transition>
          <Transition
            show={subMenu}
            as={"div"}
            enter="transform transition-transform ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition-transform ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className={`w-full ${
              initialSlide !== "" ? "h-[1000px] overflow-y-scroll" : "h-[200px]"
            } px-5 pt-4 absolute right-0 left-0 top-[4.2rem] bg-white `}
          >
            <div className="flex flex-col gap-y-5 h-[265px]">
              <div className="">
                <Button
                  title="Legal Tech service"
                  icon="./icons/pointer.svg"
                  textStyle="lg:text-[25.92px] text-xl font-normal "
                  iconStyle={`w-[26px] h-[26px] transition-all duration-300 ${
                    initialSlide === "product" ? "rotate-90" : "rotate-360"
                  }`}
                  btnStyles="w-full gap-x-5 h-[37px]  flex justify-between items-center hover:bg-[#F2F2F2]  py-3 rounded-sm"
                  handleClick={() => {
                    initialSlide === ""
                      ? setInitialSlide("product")
                      : setInitialSlide("");
                  }}
                />
                <Transition
                  show={initialSlide === "product"}
                  as={"div"}
                  enter="transition-transform ease-out duration-300"
                  enterFrom=" opacity-0 -translate-y-10"
                  enterTo="opacity-100 -translate-y-0"
                  leave="transition-transform ease-in duration-200"
                  leaveFrom="opacity-100 -translate-y-0"
                  leaveTo="opacity-0 -translate-y-full"
                  className={"h-full bg-white "}
                >
                  <div className="flex flex-col  items-start pl-3 mt-6 ">
                    <div className="flex flex-col items-start gap-y-5">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        PRODUCTS
                      </span>
                      <img
                        src="./assets/laptop.svg"
                        className="w-[283px] h-[161px] rounded-lg object-contain"
                        alt=""
                      />
                      <span className="text-[#19191F] text-md">
                        <span className="font-medium">
                          Our Legal Tech Services
                        </span>{" "}
                        - Automating <br /> the critical touchpoints of the
                        Justice sector.
                      </span>
                    </div>

                    <div className="flex flex-col gap-y-4 mt-6">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        LEGAL SOLUTIONS
                      </span>
                      <div className="flex flex-col gap-y-5 text-[#3F3F3F] font-medium text-lg">
                        <span
                          onClick={() => showSlides("i-case")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          i-CASEFLOW
                        </span>
                        <span
                          onClick={() => showSlides("e-probate")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          e-PROBATE
                        </span>
                        <span
                          onClick={() => showSlides("affidavit")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          e-AFFIDAVIT
                        </span>
                        <span
                          onClick={() => showSlides("e-moj")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          e-MoJ
                        </span>
                        <span
                          onClick={() => showSlides("verbatim")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          {`Verbatim Reporting Academy`.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
              <div>
                <Button
                  title="Management Consulting "
                  icon="./icons/pointer.svg"
                  textStyle="lg:text-[25.92px] text-xl font-normal "
                  iconStyle={`w-[26px] h-[26px] transition-all duration-300 ${
                    initialSlide === "management" ? "rotate-90" : "rotate-360"
                  }`}
                  btnStyles="w-full gap-x-5 h-[37px] flex justify-between items-center hover:bg-[#F2F2F2] py-3 rounded-sm"
                  handleClick={() => {
                    initialSlide === ""
                      ? setInitialSlide("management")
                      : setInitialSlide("");
                  }}
                />
                <Transition
                  show={initialSlide === "management"}
                  as={"div"}
                  enter="transition-transform ease-out duration-300"
                  enterFrom="opacity-0 -translate-y-10"
                  enterTo="opacity-100 -translate-y-0"
                  leave="transition-transform ease-in duration-200"
                  leaveFrom="opacity-100 -translate-y-0"
                  leaveTo="opacity-0 -translate-y-full"
                >
                  <div className="flex flex-col items-start mt-4 pl-3">
                    <div className="flex flex-col items-start gap-y-5">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        MANAGEMENT
                      </span>
                      <img
                        src="./assets/woman.svg"
                        className="w-[283px] h-[161px] rounded-lg object-contain"
                        alt=""
                      />
                      <span className="text-[#19191F] text-md">
                        <span className="font-medium">
                          Management Consulting
                        </span>{" "}
                        - <br />
                        Our Management Consulting Solutions
                      </span>
                    </div>

                    <div className="mt-6 flex flex-col gap-y-4">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        LEGAL SOLUTIONS
                      </span>
                      <div className="flex flex-col gap-y-5 text-[#3F3F3F] font-medium text-lg">
                        <span>Tech Consulting</span>
                        <span>Change Management</span>
                        <span>Strategy Consulting</span>
                        <span>Project Management</span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
        </div>
      ) : (
        <header className="w-full fixed top-0 right-0 border-b border-[#999F9933] left-0 z-30 bg-white px-5 py-3 flex justify-between items-center">
          <div className="flex items-center gap-x-12">
            <Logo />
            <div className="">
              <ul className="flex items-center gap-x-5 text-primary-200">
                <Link
                  to={"/"}
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  About Us
                </Link>
                <li
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                  onClick={() => {
                    dropbox
                      ? dispatch(setDropBox(false))
                      : dispatch(setDropBox(true));
                  }}
                >
                  Solution
                </li>
                <Link
                  to="/blog"
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-primaryblue text-md cursor-pointer hover:text-gray-500"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>

          <Button
            title="Contact sales"
            textStyle="text-white text-md"
            handleClick={() => navigate("/contact")}
            icon=""
            btnStyles={`bg-primary-200 rounded-lg `}
          />

          <Transition
            as={"div"}
            show={dropbox}
            enter="transition duration-300 ease-out"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-300 ease-out"
            leaveFrom="opacity-100 -translate-y"
            leaveTo="opacity-0 -translate-y-full"
            className="bg-white w-full absolute shadow-lg border-t  top-16 left-0 h-[350px] px-7 py-8"
          >
            <div className="flex  items-start">
              <div className="flex flex-col gap-y-8 border-r h-[265px]">
                <Button
                  title="Legal Tech service"
                  icon="./icons/pointer.svg"
                  textStyle="text-[25.92px] font-normal "
                  iconStyle="w-[26px] h-[26px]"
                  btnStyles="w-full gap-x-5 h-[37px] flex justify-between items-center hover:bg-[#F2F2F2] px-5 py-3 rounded-sm"
                  handleClick={() => setInitialSlide("product")}
                />
                <Button
                  title="Management Consulting "
                  icon="./icons/pointer.svg"
                  textStyle="text-[25.92px] font-normal "
                  iconStyle="w-[26px] h-[26px]"
                  btnStyles="w-full gap-x-5 h-[37px] flex justify-between items-center hover:bg-[#F2F2F2] px-5 py-3 rounded-sm"
                  handleClick={() => setInitialSlide("management")}
                />
              </div>
              <div className="ml-24">
                <Transition
                  show={initialSlide === "product"}
                  as={"div"}
                  enter="transition-transform ease-out duration-300"
                  enterFrom=" opacity-0 -translate-y-full"
                  enterTo="opacity-100 -translate-y-0"
                  leave="transition-transform ease-in duration-200"
                  leaveFrom="opacity-100 -translate-y-0"
                  leaveTo="opacity-0 -translate-y-full"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-y-5">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        PRODUCTS
                      </span>
                      <img
                        src="./assets/laptop.svg"
                        className="w-[283px] h-[161px] rounded-lg object-contain"
                        alt=""
                      />
                      <span className="text-[#19191F] text-md">
                        <span className="font-medium">
                          Our Legal Tech Services
                        </span>{" "}
                        - Automating <br /> the critical touchpoints of the
                        Justice sector.
                      </span>
                    </div>

                    <div className="ml-32 flex flex-col gap-y-4">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        LEGAL SOLUTIONS
                      </span>
                      <div className="flex flex-col gap-y-5 text-[#3F3F3F] font-medium text-lg">
                        <span
                          onClick={() => showSlides("i-case")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          i-CASEFLOW
                        </span>
                        <span
                          onClick={() => showSlides("e-probate")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          e-PROBATE
                        </span>
                        <span
                          onClick={() => showSlides("affidavit")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          e-AFFIDAVIT
                        </span>
                        <span
                          onClick={() => showSlides("e-moj")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          e-MoJ
                        </span>
                        <span
                          onClick={() => showSlides("verbatim")}
                          className="cursor-pointer hover:text-primary-200 hover:scale-105 transition-all duration-300"
                        >
                          {`Verbatim Reporting Academy`.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Transition>
                <Transition
                  show={initialSlide === "management"}
                  as={"div"}
                  enter="transition-transform ease-out duration-300"
                  enterFrom="opacity-0 -translate-y-full"
                  enterTo="opacity-100 -translate-y-0"
                  leave="transition-transform ease-in duration-200"
                  leaveFrom="opacity-100 -translate-y-0"
                  leaveTo="opacity-0 -translate-y-full"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-y-5">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        MANAGEMENT
                      </span>
                      <img
                        src="./assets/woman.svg"
                        className="w-[283px] h-[161px] rounded-lg object-contain"
                        alt=""
                      />
                      <span className="text-[#19191F] text-md">
                        <span className="font-medium">
                          Management Consulting
                        </span>{" "}
                        - <br />
                        Our Management Consulting Solutions
                      </span>
                    </div>

                    <div className="ml-32 flex flex-col gap-y-4">
                      <span className="text-[#5F5F5F] text-xs font-normal">
                        LEGAL SOLUTIONS
                      </span>
                      <div className="flex flex-col gap-y-5 text-[#3F3F3F] font-medium text-lg">
                        <span>Tech Consulting</span>
                        <span>Change Management</span>
                        <span>Strategy Consulting</span>
                        <span>Project Management</span>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </Transition>
        </header>
      )}

      {slide === "i-case" ? (
        <IcaseFlow slide={showpanel} setSlide={handleClosePanel} />
      ) : slide === "verbatim" ? (
        <Verbatim slide={showpanel} setSlide={handleClosePanel} />
      ) : slide === "e-probate" ? (
        <Eprobate slide={showpanel} setSlide={handleClosePanel} />
      ) : slide === "affidavit" ? (
        <Affidavit slide={showpanel} setSlide={handleClosePanel} />
      ) : (
        slide === "e-moj" && (
          <Emoj slide={showpanel} setSlide={handleClosePanel} />
        )
      )}
    </>
  );
}

export default Header;
