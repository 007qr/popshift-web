"use client";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue, AnimationPlaybackControls, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Section1 from "~/components/Section1";
import Section2 from "~/components/Section2";
import Section3 from "~/components/Section3";
import EventList from "~/components/EventList";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerRef2 = useRef<HTMLDivElement>(null);
    
    const animControls = useRef<AnimationPlaybackControls>();


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    useScroll({
      target: containerRef2,
      offset: ['start center', 'end end']
  }).scrollYProgress.on("change", (yProgress) => {
      if (!animControls.current) return;
      animControls.current.time = yProgress * animControls.current.duration;
  });

    const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 1000 * -1.2]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 1000]);


    useEffect(() => {
      animControls.current = animate([
        ['#div-1', {transform: ['translate3d(-100%, 0, 0)', 'translate3d(100%, 0, 0)']}, {duration: 10, at: 0, ease: 'easeInOut'}],
        ['#div-2', {transform: ['translate3d(100%, 0, 0)', 'translate3d(-100%, 0, 0)']}, {duration: 10, at: 0, ease: 'easeInOut'}],
      ])
      animControls.current.pause();

    }, []);
    return (
        <>
            <Section2 />
            <Section3 />
           <Section1 />
            <div className="h-[70svh] pt-20 z-10 bg-white relative">
                <div className="sticky top-20 text-center">
                    <h1 className="text-7xl tracking-tighter font-bold">
                        TV Shows
                    </h1>
                </div>
            </div>
            <div className="flex justify-center pt-2 bg-white z-10 relative">
                <p className="w-60 text-center">
                    Alongside showrunners and writers of some of{" "}
                    {"television's"} most popular shows
                </p>
            </div>
            <div
                className="h-[155vh] pt-[15vh] overflow-hidden bg-white z-10 relative"
                ref={containerRef}
            >
                <div className="w-full h-full flex flex-col gap-[1vh] relative">
                    <Row
                        left="-55%"
                        y={y}
                        images={[
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                        ]}
                    />
                    <Row
                        left="15%"
                        y={y2}
                        images={[
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                        ]}
                    />
                    <Row
                        left="-95%"
                        y={y3}
                        images={[
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                            "/images/1.png",
                        ]}
                    />
                </div>
            </div>
            <div className="h-[80svh] relative z-10 bg-white">
                <h1
                    className="text-7xl text-center sticky top-10"
                    style={{ fontFamily: "Times New Roman" }}
                >
                    The Layout
                </h1>
            </div>
            <div className="h-[100vh] flex-col flex overflow-hidden bg-white z-10 relative" ref={containerRef2}>
              <div className="flex flex-col items-center">
                <p className="mt-7 w-72 text-center"> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repudiandae dolorum inventore praesentium, vel eum doloribus
                    nulla magnam beatae modi pariatur.
                </p>
              </div>
              <div className="flex px-10 w-full mt-40 justify-between">
                  <div className="flex w-1/4 flex-col items-center" id='div-1'>
                      <h1 className="text-4xl">50</h1>
                      <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error inventore aliquam nesciunt modi porro quos qui cupiditate aperiam atque.</p>
                  </div>
                  <div className="flex w-1/4 flex-col items-center" id='div-2'>
                      <h1 className="text-4xl">50</h1>
                      <p>of {"world's"} most <br /> fascinating minds and</p>
                  </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="relative -mt-[20svh] z-50 flex items-center w-full">
                    <EventList />
                </div>
            </div>
            <div className="h-screen relative z-50 bg-white"></div>
        </>
    );
}

const Row = ({
    images,
    y,
    left,
}: {
    images: string[];
    y: MotionValue<number>;
    left: string;
}) => {
    return (
        <motion.div
            style={{ x: y, left: left }}
            className="w-min h-min flex-row flex gap-[1vh] relative"
        >
            {images.map((v, i) => {
                return (
                    <div key={i} className="relative w-[250px] h-[340px]">
                        <Image
                            src={v}
                            fill
                            alt={`${i}`}
                            className="object-cover grayscale rounded-xl"
                        />{" "}
                    </div>
                );
            })}
        </motion.div>
    );
};
