import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex items-start w-full">
      <div className="flex flex-col gap-y-4 w-full p-7">
        <img
          src="./assets/login-logo.svg"
          className="w-[225px] h-[57.15px]"
          alt=""
        />

        <div className="w-full flex flex-col items-center justify-center ">
          <Bounce className="w-full px-16 mt-8">
            <div className="flex flex-col gap-y-3">
              <span className="text-black text-[32px] font-medium">
                Welcome back!
              </span>
              <span className="text-black text-[16px] font-medium">
                Enter your Credentials to access your account
              </span>
            </div>
            <form action="" className="flex flex-col gap-y-5 mt-5">
              <div className="flex items-start gap-y-1 flex-col">
                <span>Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-xs placeholder:text-sm placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full rounded-lg border border-[#D9D9D9] p-3 outline-none"
                />
              </div>
              <div className="flex items-start gap-y-1 flex-col">
                <span>Password</span>
                <div className="flex justify-between items-center w-full rounded-lg border  border-[#D9D9D9] p-3">
                  <input
                    type="password"
                    placeholder="........."
                    className="text-xs placeholder:text-sm placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full outline-none"
                  />
                  <FaEye size={15} className="text-gray-300" />
                </div>
              </div>
            </form>

            {/* <Button
              title="Login"
              btnStyles="bg-[#261EA6] w-full rounded-lg py-3"
              textStyle="text-white font-medium text-sm"
              handleClick={() => navigate("/")}
            /> */}
            <button className="bg-[#261EA6] w-full rounded-lg py-3 text-white font-medium text-sm hover:bg-opacity-80">
              Login
            </button>
          </Bounce>
        </div>
      </div>
      <Fade direction="right" className="w-full">
        <div
          className="bg-[#E4F4FF] w-full h-screen bg-no-repeat bg-cover rounded-tl-3xl rounded-bl-3xl"
          style={{ backgroundImage: "url('./assets/admin-panel.jpeg')" }}
        ></div>
      </Fade>
    </div>
  );
}

export default Login;
