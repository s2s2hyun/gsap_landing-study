"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref1.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    tl.to(ref1.current, { zIndex: 1 })
      .to(ref2.current, { zIndex: 2 })
      .to(ref3.current, { zIndex: 3 })
      .to(ref4.current, { zIndex: 4 });
  }, []);

  return (
    <main className="relative">
      {/* Div 첫번쨰  */}
      <div className="w-full bg-blue-400 h-screen flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-3xl font-light text-white">
            Mixed observer and scrolling...
          </h1>
        </div>
        <div className="absolute bottom-5  ">
          <div>Scroll down</div>
        </div>
      </div>
      {/* Div 두번째  */}
      <div className="relative ">
        <div
          className="absolute w-full h-screen justify-center flex items-center  overflow-hidden  z-10  bg-rose-600 text-center"
          ref={ref1}>
          <h1 className="text-3xl font-semibold text-white">
            ScrollTrigger.observe() section
          </h1>
        </div>
        <div
          className="absolute w-full h-screen justify-center flex items-center  overflow-hidden z-9  bg-violet-600 text-center"
          ref={ref2}>
          <h1 className="text-3xl font-semibold text-white">SWIPE SECTION 2</h1>
        </div>
        <div
          className=" absolute w-full h-screen justify-center flex items-center  overflow-hidden z-8  bg-blue-500 text-center"
          ref={ref3}>
          <h1 className="text-3xl font-semibold text-white">SWIPE SECTION 3</h1>
        </div>
        <div
          className=" absolute  w-full h-screen justify-center flex items-center   overflow-hidden z-2   bg-orange-500 text-center"
          ref={ref4}>
          <h1 className="text-3xl font-semibold text-white">
            Last swipe section... continue scrolling
          </h1>
        </div>
      </div>
    </main>
  );
}
