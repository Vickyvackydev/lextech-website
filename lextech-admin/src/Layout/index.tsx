import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks";

import Header from "../components/Header";
import { Sidebar } from "../components/sidebar";

interface LayoutProps {
  children: JSX.Element;
}

export const DashboardLayout = (props: LayoutProps) => {
  const isMobileView = useMediaQuery("(max-width: 640px)");
  const isTabletView = useMediaQuery("(max-width: 840px)");
  const [isSideNavVisible, setSideNavVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isMobileView) {
      setSideNavVisible(false);
    } else {
      setSideNavVisible(true);
    }
  }, [isMobileView]);

  return (
    <div className="lg:flex h-screen w-screen bg-[#F4F7FE]">
      {isMobileView || isTabletView ? (
        <div
          onClick={() => setSideNavVisible(false)}
          className={`fixed top-0 left-0 bottom-0 w-full bg-gray-800/60 z-20 ${
            isSideNavVisible ? "" : "hidden"
          }`}
        ></div>
      ) : null}

      <Sidebar
        {...{
          open: isSideNavVisible,
          onClose: () => setSideNavVisible(false),
        }}
      />

      <div className="w-full lg:w-[82vw] h-full flex-1 ">
        <Header {...{ onMenu: () => setSideNavVisible(true) }} />

        <div className=" w-full  overflow-x-hidden h-[80%] ">
          <div className="overflow-auto pb-0 md:pb-80  px-4 lg:px-7 lg:pb-0">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
