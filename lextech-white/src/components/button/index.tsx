import React from "react";
import { ButtonTypeProps } from "../../types";

function Button(props: ButtonTypeProps) {
  return (
    <button
      onClick={props.handleClick}
      className={`${props.btnStyles} w-[140px] h-[44px] hover:scale-95 transition-all duration-200`}
    >
      <span className={`${props.textStyle}`}>{props.title}</span>
      {props.rightarrow ? (
        <img
          src="./icons/arrow.svg"
          alt=""
          className={`w-[20px] h-[27px] object-contain mt-2`}
        />
      ) : (
        (props.icon !== "" && (
          <img
            src={props.icon}
            className={`w-[13.88px] h-[13.88px] ${props.iconStyle}`}
            alt=""
          />
        )) ||
        null
      )}
    </button>
  );
}

export default Button;
