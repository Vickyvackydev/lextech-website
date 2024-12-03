import React, { FormEvent, useState } from "react";
import FormField from "../../components/FormField";
import Button from "../../components/button";
import { ContactInquiryType } from "../../services/type";
import { ContactInquiryApi } from "../../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logDOM } from "@testing-library/react";
function ContactField() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inquiryType, setInquiryType] = useState("product");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    ful_name: "",
    job_title: "",
    company_name: "",
    hear_about_us: "",
    inquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    formField: string
  ) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [formField]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload: ContactInquiryType = {
      firstName: formData.first_name,
      lastName: formData.last_name,
      fullName: formData.ful_name,
      jobTitle: formData.job_title,
      companyName: formData.company_name,
      hearAboutUs: formData.hear_about_us,
      inquiry: formData.inquiry,
      inquiryType: inquiryType,
    };

    try {
      const response = await ContactInquiryApi(payload);

      if (response) {
        toast.success(response?.data?.message, {
          duration: 10000,
        });
        navigate("/");
        setFormData({
          first_name: "",
          last_name: "",
          ful_name: "",
          job_title: "",
          company_name: "",
          hear_about_us: "",
          inquiry: "",
        });
        setInquiryType("");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex lg:justify-end justify-center lg:px-0 px-3">
      <div className="fixed w-full h-full bg-[#0D0769] -z-10">
        <div className="lg:flex flex-col gap-y-4 w-[400px] pt-[15rem] pl-[5rem] hidden">
          <span className="text-[45px] text-white font-normal leading-[50px]">
            Contact our <br /> Sales team
          </span>
          <span className="text-white text-[17.16px]">
            Fill out the form and a member of our team will reach out to you to
            discuss how Lextech Ecosystem can help.
          </span>
          <span className="text-white text-[17.16px]">
            {" "}
            For more technical info, email our Help Center.
          </span>
        </div>
      </div>
      <div className="lg:w-[800px] w-full lg:mr-7 mr-0  lg:h-[1603px] h-full bg-white mt-12 rounded-lg lg:p-10 p-5">
        <span className="text-[26.36px] font-normal">I’m interested in</span>
        <div className="flex lg:flex-row flex-col gap-y-4 gap-x-4 mt-6 w-full">
          <div
            className={`lg:w-[380px] w-full h-[219px] rounded-lg  ${
              inquiryType === "product" ? "bg-[#CDEED3]" : "bg-[#F7F7F7]"
            }  hover:bg-[#CDEED3]   cursor-pointer p-6 flex flex-col gap-y-14 `}
            onClick={() => setInquiryType("product")}
          >
            <span className="text-[15px]">PRODUCTS</span>
            <span className="lg:text-[30px] text-xl leading-[35px]">
              Our legal tech services
            </span>
          </div>
          <div
            className={`lg:w-[380px] w-full h-[219px] rounded-lg ${
              inquiryType === "sale" ? "bg-[#CDEED3]" : "bg-[#F7F7F7]"
            } hover:bg-[#CDEED3]  bg-[#F7F7F7] cursor-pointer p-6 flex flex-col gap-y-14  `}
            onClick={() => setInquiryType("sale")}
          >
            <span className="text-[15px]">SERVICES</span>
            <span className="lg:text-[30px] text-xl leading-[35px]">
              Our management consulting solutions
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-10">
          <span className="text-[25.92px]">Your Details</span>
          <div className="flex flex-col gap-y-6 mt-6">
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-3 gap-y-5 ">
              <FormField
                type="text"
                value={formData.first_name}
                handleChange={(e) => handleChange(e, "first_name")}
                placeholder="First name "
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
              <FormField
                type="text"
                value={formData.last_name}
                handleChange={(e) => handleChange(e, "last_name")}
                placeholder="Last name"
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
            </div>
            <FormField
              type="text"
              value={formData.ful_name}
              handleChange={(e) => handleChange(e, "ful_name")}
              placeholder="Full name"
              placeholderstyle="text-[#6A6A6A] text-[17.3px]"
              inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
              title=""
              formFieldType="input"
            />
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-3 gap-y-5 ">
              <FormField
                type="text"
                value={formData.job_title}
                handleChange={(e) => handleChange(e, "job_title")}
                placeholder="Job title "
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
              <FormField
                type="text"
                value={formData.company_name}
                handleChange={(e) => handleChange(e, "company_name")}
                placeholder="Company name"
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
            </div>
            {/* <FormField
              type="text"
              value=""
              handleChange={() => {}}
              placeholder="How did you hear about us?"
              placeholderstyle="text-[#6A6A6A] text-[17.3px]"
              inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
              title=""
              formFieldType="input"
            /> */}
          </div>
          <div className="mt-9 flex flex-col items-start gap-y-10">
            <span className="text-[25.92px]">Any additional note</span>
            <FormField
              type="text"
              value={formData.inquiry}
              handleChange={(e) => handleChange(e, "inquiry")}
              placeholder="How did you hear about us?"
              placeholderstyle="text-[#6A6A6A] text-[17.3px]"
              inputstyle="border resize-none border-[#DBDBDB] rounded-lg w-full h-[264px] px-4 pt-5"
              title=""
              formFieldType="textarea"
            />
            <Button
              type="submit"
              title="Contact sales"
              textStyle="text-white text-md"
              handleClick={() => {}}
              icon=""
              loading={loading}
              btnStyles={`bg-[#0D0769] rounded-lg w-[194px] h-[69px] `}
            />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactField;
