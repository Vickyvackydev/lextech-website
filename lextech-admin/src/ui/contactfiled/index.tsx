import React from "react";
import FormField from "../../components/FormField";
import Button from "../../components/button";

function ContactField() {
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
          <div className="lg:w-[380px] w-full h-[219px] rounded-lg  hover:bg-[#CDEED3]  bg-[#F7F7F7] cursor-pointer p-6 flex flex-col gap-y-14">
            <span className="text-[15px]">PRODUCTS</span>
            <span className="lg:text-[30px] text-xl leading-[35px]">
              Our legal tech services
            </span>
          </div>
          <div className="lg:w-[380px] w-full h-[219px] rounded-lg hover:bg-[#CDEED3] bg-[#F7F7F7] cursor-pointer p-6 flex flex-col gap-y-14">
            <span className="text-[15px]">SERVICES</span>
            <span className="lg:text-[30px] text-xl leading-[35px]">
              Our management consulting solutions
            </span>
          </div>
        </div>
        <form action="" className="mt-10">
          <span className="text-[25.92px]">Your Details</span>
          <div className="flex flex-col gap-y-6 mt-6">
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-3 gap-y-5 ">
              <FormField
                type="text"
                value=""
                handleChange={() => {}}
                placeholder="First name "
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
              <FormField
                type="text"
                value=""
                handleChange={() => {}}
                placeholder="Last name"
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
            </div>
            <FormField
              type="text"
              value=""
              handleChange={() => {}}
              placeholder="Full name"
              placeholderstyle="text-[#6A6A6A] text-[17.3px]"
              inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
              title=""
              formFieldType="input"
            />
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-x-3 gap-y-5 ">
              <FormField
                type="text"
                value=""
                handleChange={() => {}}
                placeholder="Job title "
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
              <FormField
                type="text"
                value=""
                handleChange={() => {}}
                placeholder="Company name"
                placeholderstyle="text-[#6A6A6A] text-[17.3px]"
                inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
                title=""
                formFieldType="input"
              />
            </div>
            <FormField
              type="text"
              value=""
              handleChange={() => {}}
              placeholder="How did you hear about us?"
              placeholderstyle="text-[#6A6A6A] text-[17.3px]"
              inputstyle="border border-[#DBDBDB] rounded-lg w-full h-[94px]"
              title=""
              formFieldType="input"
            />
          </div>
          <div className="mt-9 flex flex-col items-start gap-y-10">
            <span className="text-[25.92px]">Any additional note</span>
            <FormField
              type="text"
              value=""
              handleChange={() => {}}
              placeholder="How did you hear about us?"
              placeholderstyle="text-[#6A6A6A] text-[17.3px]"
              inputstyle="border resize-none border-[#DBDBDB] rounded-lg w-full h-[264px] px-4 pt-5"
              title=""
              formFieldType="textarea"
            />
            <Button
              title="Contact sales"
              textStyle="text-white text-md"
              handleClick={() => {}}
              icon=""
              btnStyles={`bg-[#0D0769] rounded-lg w-[194px] h-[69px] `}
            />
          </div>
        </form>
      </div>
    </main>
  );
}

export default ContactField;
