import React from "react";
import Button from "../../components/button";

function Explore() {
  return (
    <main className="lg:px-10 px-5 py-16 bg-[#FAFAFA]">
      <div className="flex lg:flex-row flex-col lg:items-center items-start lg:justify-between justify-evenly">
        <div>
          <div className="flex flex-col items-start leading-tight gap-y-4">
            <span className="text-primary-100 text-[17.3px]">
              Software for Venture & Private Equity
            </span>
            <span className="text-[#002A7F] text-[56.02px]">
              LexTech Ecosystem <br /> Limited
            </span>
          </div>

          <div className="flex flex-col gap-y-10 mt-8">
            <p className="text-[#1D1E2A99] text-[16px] font-normal">
              LexTech Ecosystems (LexTech) is a dynamic technology enterprise
              committed to catalyzing transformative changes across multiple
              sectors through innovative solutions. Founded with a primary focus
              on legal technology, we have since expanded our expertise to
              encompass a comprehensive suite of services, with a special
              emphasis on management consulting. Our mission remains unwavering:
              to introduce cutting-edge technology that addresses systemic
              challenges and enhances operational efficiency across diverse
              industries.
            </p>
            <p className="text-[#1D1E2A99] text-[16px] font-normal">
              We provide a portfolio of comprehensive solutions laced with an
              admirably classy customer experience model that delivers
              Excellence!
            </p>
          </div>
          <Button
            title="Learn More"
            handleClick={() => {}}
            textStyle=""
            icon=""
            btnStyles="mt-6 border border-[#0A090914] rounded-xl"
          />
        </div>
        <img
          src="./assets/gal-boy-im.svg"
          className="w-[641px] h-[535px] object-contain lg:mt-32 -mt-20"
          alt=""
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default Explore;
