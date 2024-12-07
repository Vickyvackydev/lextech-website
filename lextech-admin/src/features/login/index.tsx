import React, { FormEvent, useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { PulseLoader } from "react-spinners";
import { useMutation } from "react-query";
import { LoginApi } from "../../services/auths";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../state/slices/authReducer";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showpassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      email: formdata.email,
      password: formdata.password,
    };
    try {
      const response = await LoginApi(payload);
      if (response) {
        toast.success(response?.message);
        navigate("/contact");
        dispatch(setToken(response?.data?.token));
        dispatch(setUser(response?.data));
        setFormdata({ email: "", password: "" });
        console.log(response);
      }
    } catch (error: any) {
      toast.error(error?.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
                  name="email"
                  type="email"
                  value={formdata.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="text-sm placeholder:text-sm placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full rounded-lg border border-[#D9D9D9] p-3 outline-none"
                />
              </div>
              <div className="flex items-start gap-y-1 flex-col">
                <span>Password</span>
                <div className="flex justify-between items-center w-full rounded-lg border  border-[#D9D9D9] p-3">
                  <input
                    name="password"
                    value={formdata.password}
                    type={showpassword ? "text" : "password"}
                    placeholder="........."
                    onChange={handleInputChange}
                    className="text-xs placeholder:text-sm placeholder:font-medium font-medium placeholder:text-[#D9D9D9] w-full outline-none"
                  />
                  {showpassword ? (
                    <FaEye
                      size={15}
                      className="text-gray-300 cursor-pointer"
                      onClick={() => setShowpassword(false)}
                    />
                  ) : (
                    <FaEyeSlash
                      size={15}
                      className="text-gray-300 cursor-pointer"
                      onClick={() => setShowpassword(true)}
                    />
                  )}
                </div>
              </div>
            </form>

            {/* <Button
              title="Login"
              btnStyles="bg-[#261EA6] w-full rounded-lg py-3"
              textStyle="text-white font-medium text-sm"
              handleClick={() => navigate("/")}
            /> */}
            <button
              type="button"
              onClick={handleLogin}
              className={`bg-[#261EA6] w-full flex items-center justify-center rounded-lg py-3 text-white font-medium text-sm hover:bg-opacity-80 ${
                loading && "bg-opacity-80"
              }`}
            >
              {loading ? <PulseLoader color="#ffffff" /> : "Login"}
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
