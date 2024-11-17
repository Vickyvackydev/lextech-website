import React from "react";
import { FormFieldTypeProps } from "../../types";

function FormField(props: FormFieldTypeProps) {
  return (
    <>
      {props.formFieldType === "input" ? (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={`bg-transparent outline-none px-4 ${props.inputstyle} placeholder:${props.placeholderstyle}`}
        />
      ) : (
        <textarea
          name=""
          id=""
          className={`${props.inputstyle} placeholder:${props.placeholderstyle}`}
          placeholder={props.placeholder}
        />
      )}
    </>
  );
}

export default FormField;
