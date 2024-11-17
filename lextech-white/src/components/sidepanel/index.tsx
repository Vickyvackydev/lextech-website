import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

function SidePanel({
  children,
  show,
  hide,
}: {
  children: React.ReactNode;
  show: boolean;
  hide: () => void;
}) {
  // Prevent scrolling when the panel is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Clean up
    };
  }, [show]);

  return (
    <>
      <Transition
        as={"div"}
        show={show}
        enter="transition-opacity ease-in-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="bg-[#3847648A] bg-opacity-50 backdrop-filter backdrop-blur-md fixed w-full h-full z-30 top-0 right-0 left-0 bottom-0"
          onClick={hide}
        />
      </Transition>

      <Transition
        as={"div"}
        show={show}
        enter="transform transition-transform ease-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition-transform ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed overflow-y-auto top-0 right-0 h-full lg:w-[1072px] w-full bg-white z-40 shadow-lg">
          <button
            onClick={hide}
            className="absolute  hover:-translate-y-5 transform transition-all duration-300 top-10 lg:left-8 left-6 text-black"
          >
            <img
              src="./icons/close-btn.svg"
              className="w-[65px] h-[65px]"
              alt=""
            />
          </button>
          <div className="lg:p-14 p-8  mt-28 ">{children}</div>
        </div>
      </Transition>
    </>
  );
}

export default SidePanel;
