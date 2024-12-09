import React, { useState } from "react";
import { sections } from "../../constants";
import IcaseFlow from "../panels/icase-flow";
import { useDispatch, useSelector } from "react-redux";
import Verbatim from "../panels/verbatim";
import Affidavit from "../panels/afidafit";
import Eprobate from "../panels/e-probate";
import { setSlideOpen, slideOpen } from "../../state/slices/globalstateReducer";

function Section() {
  const [slide, setSlide] = useState(0);
  const showpanel = useSelector(slideOpen);

  const dispatch = useDispatch();

  const handleClosePanel = () => {
    dispatch(setSlideOpen(false));
  };
  const showSlides = (id: number) => {
    dispatch(setSlideOpen(true));
    setSlide(id);
  };

  return (
    <div className="mt-20">
      <div className=" w-full lg:max-w-[1500px] lg:mx-auto  flex flex-row items-center leading-tight gap-y-4 gap-x-3 border-b border-[#999F9933] mb-16 pb-5"
      ><span className="text-primary-100 font-bold text-[10.75px] lg:text-[17.3px]">
      <img src="./assets/Arrwd.svg" alt="" />
      </span> 
            <span className="text-primary-100 font-bold text-[10.75px] lg:text-[17.3px]">
            Our Solutions
            </span> 
          </div> 
      <div className="w-full lg:max-w-[1500px] lg:mx-auto grid lg:grid-cols-4 grid-cols-1 lg:gap-x-4 gap-y-4">
     
        {sections.map((item) => (
          <div
            onClick={() => showSlides(item.id)}
            key={item.id}
            className="border-t overflow-hidden cursor-pointer  border-[#999F9933] flex flex-col gap-y-5 border-b relative"
          >
            <span className="mt-3 text-[#002A7F] text-center lg:text-start lg:font-normal lg:text-lg text-[35px] ">
              {item.title}
            </span>
            <img
              src={item.img}
              className="lg:w-[348px] w-full h-[464px] rounded-xl  object-cover hover:scale-105 transition-all duration-300"
              alt=""
              loading="lazy"
            />

            <div className="flex flex-col items-start mb-5 relative">
              <span className="text-sm font-medium text-[#002A7F]">
                {item.subtitle}
              </span>
              <span className="font-normal text-sm text-[#1D1E2AA6]">
                {item.description}
              </span>
              <button className="absolute hover:scale-105 transition-all duration-300 w-[48px] h-[48px] right-4  rounded-full -top-[5rem] flex justify-center items-center bg-[#45474359] ">
                <img
                  src="./icons/plus.svg"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      {slide === 1 ? (
        <IcaseFlow slide={showpanel} setSlide={handleClosePanel} />
      ) : slide === 2 ? (
        <Verbatim slide={showpanel} setSlide={handleClosePanel} />
      ) : slide === 3 ? (
        <Eprobate slide={showpanel} setSlide={handleClosePanel} />
      ) : (
        slide === 4 && (
          <Affidavit slide={showpanel} setSlide={handleClosePanel} />
        )
      )}
    </div>
  );
}

export default Section;
