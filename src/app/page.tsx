"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/gsapHelper/isomophicEffect";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../public/img-1.png";
import img2 from "../../public/img-2.png";
import img3 from "../../public/img-3.png";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const root = useRef(null);

  const [active, setActive] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (active === 0 || active === undefined) {
        gsap.from(".yellow", { y: "-1000", duration: 2 });
        gsap.from(".black", { y: "1000", duration: 2 });
        gsap.from(".img", { x: "1000", duration: 2 });
        gsap.from(".big span", {
          y: "100",
          opacity: 0,
          delay: 1,
          stagger: 0.2,
        });
        gsap.from(".small", { y: "100", opacity: 0, delay: 2 });
      } else if (active === 1) {
        gsap.from(".red", { y: "-1000", duration: 2 });
        gsap.from(".black", { y: "1000", duration: 2 });
        gsap.from(".img", { x: "1000", duration: 2 });
        gsap.from(".big span", {
          y: "100",
          opacity: 0,
          delay: 1,
          stagger: 0.2,
        });
        gsap.from(".small", { y: "100", opacity: 0, delay: 2 });
      } else if (active === 2) {
        gsap.from(".blue", { y: "-1000", duration: 2 });
        gsap.from(".black", { y: "1000", duration: 2 });
        gsap.from(".img", { x: "1000", duration: 2 });
        gsap.from(".big span", {
          y: "100",
          opacity: 0,
          delay: 1,
          stagger: 0.2,
        });
        gsap.from(".small", { y: "100", opacity: 0, delay: 2 });
      }
    }, root);

    return () => ctx.revert();
  }, [active]);

  return (
    <>
      <main className="min-h-screen">
        <Swiper
          ref={root}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}"><span>${String(
                index + 1
              ).padStart(2, "0")}</span></span>`;
            },
          }}
          onActiveIndexChange={(swiper) => {
            console.log(swiper.activeIndex);
            setActive(swiper.activeIndex);
          }}
          speed={1000}
          direction="vertical"
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="mySwiper h-screen bg-red-200">
          <SwiperSlide className="w-full h-full bg-slate-400 relative">
            <div className="yellow absolute top-0 h-full bottom-0 w-[40%] bg-[#edca29] "></div>
            <div className="black absolute top-0 h-full bottom-0 right-0 w-[60%] bg-[#1a1a15]  "></div>
            <div className="content w-full h-full flex justify-center items-center relative">
              {/*  */}
              <div className="title absolute text-white pb-[450px] ">
                <div className="small absolute text-[50px] -top-3  -left-3"></div>
                {/*  text bg */}
                <div className="big font-bold  relative text-[150px] top-[50px] md:text-[200px] lg:text-[280px] md:top-0">
                  <span>R</span>
                  <span>A</span>
                  <span>C</span>
                  <span>E</span>
                </div>
              </div>
              {/* img  */}
              <div className="img relative   h-[50%] w-[50%] mt-[120px]">
                <Image
                  alt=""
                  src={img1}
                  layout="fill"
                  quality={100}
                  objectFit="contain"
                />
              </div>
              {/* description */}
              <div className="absolute bottom-10 p-2 gap-4 flex items-center w-full justify-center text-[#fffcef] text-xl">
                <span className="">
                  <b className="font-bold">302</b>MPH
                </span>
                <span className="">
                  <b className="font-bold">0-100</b>KMPH
                </span>
                <span className="">
                  <b className="font-bold">350</b>KW
                </span>
                <button className="button py-2 px-3 border border-[#efca29]  rounded-xl text-[#efca29] hover:text-[#1a1a15] hover:bg-[#efca29] cursor-pointer">
                  Discover Now <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* item2 */}
          <SwiperSlide className="w-full h-full bg-slate-400 relative">
            <div className="red absolute top-0 h-full bottom-0 w-[40%] bg-[#972826] "></div>
            <div className="black absolute top-0 h-full bottom-0 right-0 w-[60%] bg-[#1a1a15]  "></div>
            <div className="content w-full h-full flex justify-center items-center relative">
              {/*  */}
              <div className="title absolute text-white pb-[450px] ">
                <div className="small absolute text-[50px] -top-3  -left-3"></div>
                {/*  text bg */}
                <div className="big font-bold  relative text-[150px] top-[50px] md:text-[200px] lg:text-[280px] md:top-0">
                  <span>R</span>
                  <span>A</span>
                  <span>C</span>
                  <span>E</span>
                </div>
              </div>
              {/* img  */}
              <div className="image relative  h-[50%] w-[50%] mt-[120px]">
                <Image
                  alt=""
                  src={img2}
                  layout="fill"
                  quality={100}
                  objectFit="contain"
                />
              </div>
              {/* description */}
              <div className="absolute bottom-10 p-2 gap-4 flex items-center w-full justify-center text-[#fffcef] text-xl">
                <span className="">
                  <b className="font-bold">302</b>MPH
                </span>
                <span className="">
                  <b className="font-bold">0-100</b>KMPH
                </span>
                <span className="">
                  <b className="font-bold">350</b>KW
                </span>
                <button className="button py-2 px-3 border border-[#972826]  rounded-xl text-[#972826] hover:text-[#1a1a15] hover:bg-[#972826] cursor-pointer">
                  Discover Now <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
          {/* item3 */}
          <SwiperSlide className="w-full h-full bg-slate-400 relative">
            <div className="blue absolute top-0 h-full bottom-0 w-[40%] bg-[#00d2fa] "></div>
            <div className="black absolute top-0 h-full bottom-0 right-0 w-[60%] bg-[#1a1a15]  "></div>
            <div className="content w-full h-full flex justify-center items-center relative">
              {/*  */}
              <div className="title absolute text-white pb-[450px] ">
                <div className="small absolute text-[50px] -top-3  -left-3"></div>
                {/*  text bg */}
                <div className="big font-bold  relative text-[150px] top-[50px] md:text-[200px] lg:text-[280px] md:top-0">
                  <span>R</span>
                  <span>A</span>
                  <span>C</span>
                  <span>E</span>
                </div>
              </div>
              {/* img  */}
              <div className="image relative  h-[50%] w-[50%] mt-[120px]">
                <Image
                  alt=""
                  src={img3}
                  layout="fill"
                  quality={100}
                  objectFit="contain"
                />
              </div>
              {/* description */}
              <div className="absolute bottom-10 p-2 gap-4 flex items-center w-full justify-center text-[#fffcef] text-xl">
                <span className="">
                  <b className="font-bold">302</b>MPH
                </span>
                <span className="">
                  <b className="font-bold">0-100</b>KMPH
                </span>
                <span className="">
                  <b className="font-bold">350</b>KW
                </span>
                <button className="button py-2 px-3 border border-[#00d2fa] hover:text-[#1a1a15] hover:bg-[#00d2fa]  rounded-xl text-[#00d2fa] cursor-pointer">
                  Discover Now <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-pagination"> </div>
        </Swiper>
      </main>
    </>
  );
}
