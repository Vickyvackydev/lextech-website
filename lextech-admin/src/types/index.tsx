export interface ButtonTypeProps {
  title: string;
  handleClick: any;
  btnStyles: string;
  textStyle: string;
  icon?: string;
  rightarrow?: boolean;
  iconStyle?: string;
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
  handleChange: (value: string) => void;
}

export interface UploadSegMentTypes {
  title: string;
  setOpen: () => void;
  data: any;
}

export interface UserPayload {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}
