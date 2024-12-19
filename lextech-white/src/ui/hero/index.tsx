import React, { Fragment, useEffect, useState } from "react";
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
import { Fade } from "react-awesome-reveal";
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
    <main className="w-full relative">
      <div className="flex flex-col items-start gap-y-7 mt-9 max-w-[1500px] lg:mx-auto">
        {/* <span className="text-[#002A7F] lg:text-[84.96px] text-2xl lg:leading-[90px] leading-[30px] ">
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
          btnStyles={`bg-primary-200 rounded-lg mt-5`}
        /> */}
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        slidesPerView="auto"
        breakpoints={{
          1024: { slidesPerView: 1 }, // For desktop
          640: { slidesPerView: 1 }, // For tablets
          320: { slidesPerView: 1 }, // For mobile
        }}
      >
        {hovercontents.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[700px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-opacity-50"
                style={{
                  backgroundImage: `url(${item.img}), linear-gradient(270deg, rgba(179, 241, 190, 0.7) 19.19%, rgba(125, 141, 255, 0.7) 69.01%, rgba(13, 7, 105, 0.7) 107.98%)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "multiply",
                }}
              ></div>
              <div className="z-10 absolute top-0 lg:mt-[220px] mt-[300px] lg:px-14 px-5   flex items-start justify-end flex-col">
                <div className="lg:w-[971px] w-[335px]  lg:flex-none flex items-start flex-col gap-y-4">
                  <Fade direction="left" duration={1000}>
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
                  </Fade>
                  <Fade direction="left" duration={1500}>
                    <span className="text-white font-bold leading-normal lg:text-[47px] text-2xl">
                      {item.title}
                    </span>
                  </Fade>
                </div>
                {!mobilescreen ? (
                  <Fade direction="up" duration={1000} className="relative">
                    <div className="flex items-center  gap-x-2 justify-center mt-[190px] ml-[50px]">
                      <div className=" border border-white absolute z-20 w-[1180px] -mt-[45px]"></div>
                      {hovercontents.map((sub) => (
                        <div className="flex flex-col items-start gap-y-3">
                          <div
                            className={`w-[263px] border-[5px] border-white rounded-lg ${
                              item.id === sub.id ? "opacity-100" : "opacity-0"
                            }`}
                          ></div>

                          <div className="flex items-center gap-x-3 ">
                            <div className="w-[24px] h-[24px]  rounded-md border border-white rotate-45 flex items-center justify-center">
                              <span className="-rotate-45 text-white text-xs">
                                {sub.id}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-white w-[254px]">
                              {sub.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fade>
                ) : (
                  <Fade direction="up" duration={1000}>
                    <div className="flex items-center  gap-x-2 justify-center mt-[180px] ml-[20px]">
                      <div className="flex flex-col items-start gap-y-3">
                        {item.id && (
                          <div className="w-[263px] border-[5px] border-white rounded-lg"></div>
                        )}
                        <div className="flex items-center gap-x-3 ">
                          <div className="w-[24px] h-[24px] rounded-sm border border-white rotate-45 flex items-center justify-center">
                            <span className="rotate-0 text-white">
                              {item.id}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-white w-[254px]">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lg:px-10 px-5">
        <Section />
        <Partners />
      </div>
    </main>
  );
}

export default Hero;

// {!mobilescreen ? (
//   <div className="mt-8 w-full">
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       autoplay={{ delay: 5000 }}
//       slidesPerView="auto"
//       breakpoints={{
//         1024: { slidesPerView: 3 }, // For desktop
//         640: { slidesPerView: 2 }, // For tablets
//         320: { slidesPerView: 1 }, // For mobile
//       }}
//     >
//       {hovercontents.map((item) => (
//         <SwiperSlide key={item.id} className="flex justify-center">
//           <div
//             onMouseEnter={() => handleMouseEnter(item.id)}
//             className="relative"
//           >
//             <img
//               src={item.img}
//               alt=""
//               className={`${
//                 fullview === item.id ? "lg:w-[754px]" : "lg:w-[343px]"
//               } h-[453px] rounded-lg object-cover transition-all duration-500 cursor-pointer`}
//               loading="lazy"
//             />
//             {fullview === item.id && (
//               <>
//                 <Button
//                   title={`${item.tag.toUpperCase()}`}
//                   handleClick={() => {}}
//                   icon=""
//                   btnStyles={`w-fit h-fit px-2 py-1 left-5 top-5 rounded-2xl bg-white absolute ${
//                     showText
//                       ? "opacity-100 -translate-y-1"
//                       : "opacity-0 translate-y-0"
//                   } transition-all duration-300`}
//                   textStyle="text-xs font-medium"
//                 />
//                 <div
//                   className={`flex flex-col z-30 rounded-b-md items-start absolute bottom-0 left-0 right-0 transition-all duration-300 lg:px-7 px-3 py-5 bg-gradient-to-t from-[#271E9A] to-[#1A0ECF00] ${
//                     showText
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-5"
//                   }`}
//                 >
//                   <span className="text-2xl font-bold text-white">
//                     {item.title}
//                   </span>
//                   <span className="text-md text-white font-medium">
//                     {item.subtitle}
//                   </span>
//                 </div>
//                 {fullview === item?.id && item?.id === 4 && (
//                   <>
//                     <img
//                       src="./assets/judge.png"
//                       className="w-[400px] h-[300px] absolute top-28 z-20 -right-14"
//                       alt=""
//                     />
//                     <img
//                       src="./assets/nation-court.png"
//                       className="w-[121px] h-[121px] absolute top-14 left-6 z-20"
//                       alt=""
//                     />
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </div>
// ) : (
//   <Swiper
//     onSwiper={(swiper: SwiperCore) => {
//       console.log("swiper", swiper.activeIndex);
//     }}
//     modules={[Navigation, Pagination, Autoplay]}
//     autoplay={{ delay: 5000 }}
//     // loop
//     breakpoints={{
//       "@0.00": {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       "@0.75": {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       "@1.00": {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//       "@1.50": {
//         slidesPerView: 4,
//         spaceBetween: 50,
//       },
//     }}
//     className="px-5 w-full"
//     onSlideChange={(swiper: SwiperCore) =>
//       setActiveIndex(swiper.activeIndex)
//     }
//   >
//     {hovercontents.map((item, i) => (
//       <SwiperSlide className=" rounded-b-xl relative" key={item.id}>
//         <div className=" rounded">
//           {/* <span className="text-white">{item.subtitle}</span>
//            */}
//           <img
//             src={item.img}
//             className={`w-[349px] h-[349px] object-cover transition-all duration-500 cursor-pointer rounded-xl`}
//             loading="lazy"
//             alt=""
//           />
//         </div>

//         <>
//           <Button
//             title={`${item.tag.toUpperCase()}`}
//             handleClick={() => {}}
//             icon=""
//             btnStyles={`w-fit h-fit px-2 py-1 left-5 top-5 rounded-2xl bg-white absolute ${
//               activeindex !== null && showContent
//                 ? "opacity-100 -translate-y-1"
//                 : "opacity-0 translate-y-0"
//             } transition-all duration-300`}
//             textStyle="text-[10px] font-medium"
//           />
//           <div
//             className={`flex flex-col items-start rounded-b-xl z-30 gap-y-2 absolute bottom-0 left-0 right-0 transition-all duration-300  px-3 py-3 bg-gradient-to-t from-[#271E9A] to-[#1A0ECF00] ${
//               activeindex !== null && showContent
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-5"
//             }`}
//           >
//             <span className="text-lg font-bold text-white leading-[20px]">
//               {item.title}
//             </span>
//             <span className="text-sm text-white font-medium">
//               {item.subtitle}
//             </span>
//           </div>
//           {item?.id === 4 && (
//             <>
//               <img
//                 src="./assets/judge.png"
//                 className="w-[300px] h-[150px] absolute bottom-10 z-20 -right-16 object-contain"
//                 alt=""
//               />
//               <img
//                 src="./assets/nation-court.png "
//                 className="w-[51px] h-[51px]  absolute top-14 left-5 object-contain"
//                 alt=""
//               />
//             </>
//           )}
//         </>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// )}
