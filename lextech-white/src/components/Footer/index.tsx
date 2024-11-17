import React from "react";
import Button from "../button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDropBox } from "../../states/slices/globalstateReducer";

function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="w-full bg-white lg:px-10 px-5 py-10 flex lg:flex-row flex-col lg:items-center items-start lg:gap-x-0 gap-y-12 justify-between mt-11">
      <div className="flex flex-col items-start gap-y-7">
        <img
          src="./assets/logo-2.png"
          className="w-[130.41px] h-[100px]"
          alt=""
        />
        <span className="text-[#6C7574] font-medium text-[16px] w-[287.75px] break-words">
          LexTech Ecosystem Limited deploys cutting edge, user-friendly
          solutions to automate the critical touchpoints of the Justice sector.
        </span>
      </div>
      <div>
        <span className="text-[#08043F] font-normal text-[26.14px]">
          Useful links
        </span>
        <ul className="flex flex-col items-start gap-y-5 mt-5 text-[15.38px] font-normal text-[#6C7574]">
          <Link
            to={"/"}
            className="hover:text-primary-200 cursor-pointer transition-all duration-300 hover:font-semibold"
          >
            Home
          </Link>
          <li
            onClick={() => dispatch(setDropBox(true))}
            className="hover:text-primary-200 cursor-pointer transition-all duration-300 hover:font-semibold"
          >
            Solution
          </li>
          <Link
            to={"/about"}
            className="hover:text-primary-200 cursor-pointer transition-all duration-300 hover:font-semibold"
          >
            About
          </Link>
          <Link
            to={"/blog"}
            className="hover:text-primary-200 cursor-pointer transition-all duration-300 hover:font-semibold"
          >
            Blog
          </Link>
          <Link
            to={"/contact"}
            className="hover:text-primary-200 cursor-pointer transition-all duration-300 hover:font-semibold"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div>
        <span className="text-[#08043F] font-normal text-[26.14px]">
          Company information
        </span>
        <div className="flex flex-col items-start gap-y-5 mt-5">
          <div className="flex items-center gap-x-3">
            <img
              src="./icons/location.svg"
              className="w-[24px] h-[24px]"
              alt=""
            />
            <span className="text-[#6C7574] font-normal text-[17.3px]">
              A4, Justice Coker Estate, Alausa, Lagos State
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="./icons/at.svg" className="w-[24px] h-[24px]" alt="" />
            <span className="text-[#6C7574] font-normal text-[17.3px]">
              contact@lextechgroup.com
            </span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="./icons/phone.svg" className="w-[24px] h-[24px]" alt="" />
            <span className="text-[#6C7574] font-normal text-[17.3px]">
              (+234) 802 312 7524
            </span>
          </div>
          <Button
            title="Talk to a consultant"
            icon="./icons/user.svg"
            btnStyles="bg-[#0D0769] rounded-3xl w-[186.05px] h-[44.81px]  flex justify-center items-center gap-3 flex-row-reverse"
            textStyle="text-white font-bold text-sm"
            handleClick={() => {}}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
