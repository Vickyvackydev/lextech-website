import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <img src="/assets/logo.svg" className="lg:w-[160px] w-[130px]" alt="" />
    </Link>
  );
}

export default Logo;
