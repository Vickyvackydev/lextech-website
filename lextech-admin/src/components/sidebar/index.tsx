import { Link, useNavigate } from "react-router-dom";

import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import { routes } from "../../constants";
import Button from "../button";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../state/slices/authReducer";

interface sidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar = (props: sidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Transition
      className={`flex-none h-full py-10 bg-[#0D0769] w-60 lg:w-[18vw] fixed lg:static z-30 lg:z-0`}
      as={"div"}
      show={props.open}
      enter="transition-all ease-in duration-500"
      enterFrom="transform -translate-x-full"
      enterTo="transform -translate-x-0"
      leave="transition-all ease-out duration-500"
      leaveFrom="transform -translate-x-0"
      leaveTo="transform -translate-x-full"
    >
      <div>
        <div className="px-8">
          <Logo />
        </div>

        <div className="flex flex-col gap-y-8 mt-12 pl-14 ">
          {routes.map((item) => (
            <>
              <Link
                to={`${item.link}`}
                className={`text-[16px] font-normal text-white relative transition-all duration-300 ${
                  item.link === location.pathname ? "font-semibold" : ""
                }`}
              >
                {item.label}
                {item.link === location.pathname && (
                  <div className="w-[6px]  h-[60px] -top-4  bg-[#46A4FF] absolute -right-[3.5px] rounded-lg" />
                )}
              </Link>
            </>
          ))}
        </div>
        <Button
          title="Logout"
          textStyle="text-[16px] text-white font-normal"
          handleClick={() => {
            dispatch(setToken(""));
            navigate("/login");
          }}
          icon=""
          btnStyles="flex item-start mt-[20rem] ml-14"
        />
      </div>
    </Transition>
  );
};
