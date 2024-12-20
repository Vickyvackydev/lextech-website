import React from "react";

export interface ButtonTypeProps {
  type?: "button" | "submit";
  loading?: boolean;
  title: string;
  handleClick: any;
  btnStyles: string;
  textStyle: string;
  icon?: string;
  rightarrow?: boolean;
  iconStyle?: string;
  disabled?: boolean;
}

export interface CardProps {
  id: number;
  img: string;
  topic: string;
  title: string;
  date: string;
  timeread: string;
}

export interface FormFieldTypeProps {
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time";
  formFieldType: "input" | "textarea";
  value: string;
  title: string;
  inputstyle: string;
  placeholder: string;
  placeholderstyle: string;
  handleChange: (
    value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
