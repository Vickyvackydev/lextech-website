import React from "react";

function Preloader() {
  return (
    <div>
      <div className="relative flex-col flex items-center justify-center mt-[16rem] animate-spin">
        <img
          src="/icons/logo-icon.svg"
          className=" rotate-180  w-[50px] h-[50px]"
          alt=""
        />
        <img
          src="/icons/logo-icon.svg"
          className=" w-[50px] h-[50px] "
          alt=""
        />
      </div>
      {/* <span>LEXTECH ECOSYSTEM LIMITED</span> */}
    </div>
  );
}

export default Preloader;
