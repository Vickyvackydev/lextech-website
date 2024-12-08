import React from "react";
import { FormFieldTypeProps } from "../../types";

function FormField(props: FormFieldTypeProps) {
  return (
    <>
      {props.formFieldType === "input" ? (
        <input
          name={props.name}
          type={props.type}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          className={`bg-transparent outline-none px-4 ${props.inputstyle} placeholder:${props.placeholderstyle}`}
        />
      ) : (
        <textarea
          name={props.name}
          id=""
          rows={5}
          onChange={props.handleChange}
          className={`${props.inputstyle} placeholder:${props.placeholderstyle}`}
          placeholder={props.placeholder}
        />
      )}
    </>
  );
}

export default FormField;
