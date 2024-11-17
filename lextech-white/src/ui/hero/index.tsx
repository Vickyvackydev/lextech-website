import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { hovercontents } from "../../constants";
import Section from "../sections";
import Partners from "../partners";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useMediaQuery } from "../../hooks";
import { Swiper as SwiperCore } from "swiper";
function Hero() {
  const [onHover, setOnHover] = useState(false);
  const [activeindex, setActiveIndex] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const mobilescreen = useMediaQuery("(max-width: 640px)");
  const [fullview, setFullView] = useState(1);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = (id: number) => {
    setFullView(id);
    setShowText(false); // Hide text while expanding the image
    setTimeout(() => {
      setShowText(true);
      // Show text after expansion
    }, 500);
  };

  useEffect(() => {
    setShowContent(false);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeindex]);
  return (
    <main className="bg-white lg:px-10 px-4 py-14">
      <div className="flex flex-col items-start gap-y-7 mt-9">
        <button
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="bg-primary-100 hover:scale-95 transition-all duration-300 w-fit px-5 lg:h-[44px] h-[30px] rounded-3xl gap-x-4 flex items-center"
          type="button"
        >
          <span className="bg-clip-text lg:text-[15.5px] text-xs text-transparent transition-all duration-300 bg-gradient-to-l from-[#FFB1B1] to-[#E8E7FF]">
            Explore Lextech Ecosystem Limited
          </span>

          <Transition
            show={onHover}
            enter="transform transition-transform ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition-transform ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <img
              src="./icons/arrow.svg"
              alt=""
              className={`w-[20px] h-[27px] object-contain mt-2`}
            />
          </Transition>
        </button>
        <span className="text-[#002A7F] lg:text-[84.96px] text-2xl lg:leading-[90px] leading-[30px] ">
          Driving Innovation for <br /> sustainable growth
        </span>
        <span className="lg:text-[25.92px] text-[16px] font-normal text-[#002A7F]">
          Deploys cutting edge, user-friendly solutions to automate <br /> the
          critical touchpoints of the Justice sector.
        </span>
        <Button
          title="Contact sales"
          textStyle="text-white text-md"
          handleClick={() => navigate("/contact")}
          icon=""
          btnStyles={`bg-[#002A7F] rounded-lg mt-5`}
        />
        {!mobilescreen ? (
          <div className="flex lg:flex-row flex-col items-center gap-3 mt-8  w-full ">
            {hovercontents.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                className="relative"
              >
                <img
                  src={item.img}
                  alt=""
                  className={`${
                    fullview === item.id ? "w-[754px]" : "w-[343px]"
                  } h-[453px] rounded-lg object-cover transition-all duration-500 cursor-pointer`}
                  loading="lazy"
                />
                {fullview === item.id && (
                  <>
                    <Button
                      title={`${item.tag.toUpperCase()}`}
                      handleClick={() => {}}
                      icon=""
                      btnStyles={`w-fit h-fit px-2 py-1 left-5 top-5 rounded-2xl bg-white absolute ${
                        showText
                          ? "opacity-100 -translate-y-1"
                          : "opacity-0 translate-y-0"
                      } transition-all duration-300`}
                      textStyle="text-xs font-medium"
                    />
                    <div
                      className={`flex flex-col items-start absolute bottom-0 left-0 right-0 transition-all duration-300 lg:px-7 px-3 py-5 bg-gradient-to-t from-[#271E9A] to-[#1A0ECF00] ${
                        showText
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {item.title}
                      </span>
                      <span className="text-md text-white font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            onSwiper={(swiper: SwiperCore) => {
              console.log("swiper", swiper.activeIndex);
            }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="px-5 w-full"
            onSlideChange={(swiper: SwiperCore) =>
              setActiveIndex(swiper.activeIndex)
            }
          >
            {hovercontents.map((item, i) => (
              <SwiperSlide className=" rounded-b-xl relative" key={item.id}>
                <div className=" rounded">
                  {/* <span className="text-white">{item.subtitle}</span>
                   */}
                  <img
                    src={item.img}
                    className={`w-[349px] h-[349px] object-cover transition-all duration-500 cursor-pointer rounded-xl`}
                    loading="lazy"
                    alt=""
                  />
                </div>

                <>
                  <Button
                    title={`${item.tag.toUpperCase()}`}
                    handleClick={() => {}}
                    icon=""
                    btnStyles={`w-fit h-fit px-2 py-1 left-5 top-5 rounded-2xl bg-white absolute ${
                      activeindex !== null && showContent
                        ? "opacity-100 -translate-y-1"
                        : "opacity-0 translate-y-0"
                    } transition-all duration-300`}
                    textStyle="text-[10px] font-medium"
                  />
                  <div
                    className={`flex flex-col items-start rounded-b-xl gap-y-2 absolute bottom-0 left-0 right-0 transition-all duration-300  px-3 py-3 bg-gradient-to-t from-[#271E9A] to-[#1A0ECF00] ${
                      activeindex !== null && showContent
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                  >
                    <span className="text-lg font-bold text-white leading-[20px]">
                      {item.title}
                    </span>
                    <span className="text-sm text-white font-medium">
                      {item.subtitle}
                    </span>
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <Section />
      <Partners />
    </main>
  );
}

export default Hero;
