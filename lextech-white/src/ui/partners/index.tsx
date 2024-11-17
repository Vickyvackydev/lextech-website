import React from "react";
import Button from "../../components/button";

const partners = [
  "./assets/pine.svg",
  "./assets/stover.svg",
  "./assets/standish.svg",
  "./assets/stone.svg",
  "./assets/belltower.svg",
];
// const partners = [
//   "./assets/partner-1.svg",
//   "./assets/partner-2.svg",
//   "./assets/partner-3.svg",
//   "./assets/partner-4.svg",
//   "./assets/partner-5.svg",
// ];
function Partners() {
  return (
    <main className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-y-7">
        <span className="text-[#002A7F] font-normal lg:text-[25.92px] text-lg text-center lg:w-full w-[300px]">
          Better together. Lextech partners with industry leaders.
        </span>
        <div className="grid lg:grid-cols-5 grid-cols-1 lg:gap-x-6 gap-y-6 items-center ">
          {partners.map((item, i) => (
            <div>
              <img
                src={item}
                alt=""
                className={`w-[127px]  border-[#999F9933]   ${
                  i !== 4 && "lg:border-r border-r-0"
                }  `}
              />
            </div>
          ))}
        </div>
        <Button
          title="Our premier partnership program assembles top professionals to deliver comprehensive "
          rightarrow
          btnStyles="lg:flex hidden justify-between items-center w-[864.66px] bg-[#002A7F] px-6 h-[47px] rounded-3xl"
          handleClick={() => {}}
          textStyle="bg-clip-text text-transparent bg-gradient-to-l from-[#FFB1B1] to-[#E8E7FF]"
        />
        <Button
          title="Our premier partnership program "
          rightarrow
          btnStyles="lg:hidden flex justify-between items-center w-[300px] bg-[#002A7F] px-6 lg:h-[47px] h-[30px] rounded-3xl"
          handleClick={() => {}}
          textStyle="bg-clip-text text-transparent lg:text-[15.5px] text-xs bg-gradient-to-l from-[#FFB1B1] to-[#E8E7FF]"
        />
      </div>
    </main>
  );
}

export default Partners;
