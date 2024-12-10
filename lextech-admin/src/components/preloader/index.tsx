import React from "react";
import { PulseLoader } from "react-spinners";

function Preloader() {
  return (
    <div className=" flex items-center justify-center mt-[16rem]">
      <PulseLoader size={50} color="#46A4FF" />
    </div>
  );
}

export default Preloader;
