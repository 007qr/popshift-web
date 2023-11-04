"use client";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerRef2 = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const container2Scroll = useScroll({
      target: containerRef2,
      offset: ['center', 'start end']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 1000 * -1.2]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
    const y4 = useTransform(container2Scroll.scrollYProgress, [0, 1], [2000, -100]);
    const y5 = useTransform(container2Scroll.scrollYProgress, [0, 1], [300, 0]);

    return (
        <>
            <div className="h-[70svh]">
                <div className="sticky top-0 text-center">
                    <h1 className="text-7xl tracking-tighter font-bold">
                        TV Shows
                    </h1>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <p className="w-60 text-center">
                    Alongside showrunners and writers of some of{" "}
                    {"television's"} most popular shows
                </p>
            </div>
            <div
                className="h-[155vh] mt-[15vh] overflow-hidden"
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
            <div className="h-[80svh]">
                <h1
                    className="text-7xl text-center sticky top-10"
                    style={{ fontFamily: "Times New Roman" }}
                >
                    The Layout
                </h1>
            </div>
            <div className="h-[70vh] flex-col flex">
              <div className="flex flex-col items-center">
                <p className="mt-7 w-72 text-center"> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repudiandae dolorum inventore praesentium, vel eum doloribus
                    nulla magnam beatae modi pariatur.
                </p>
              </div>
              <motion.div className="flex mx-10 justify-center overflow-hidden" style={{marginTop: y5}}>
                  <motion.div style={{marginRight: y4}} className="flex mr-[90%] flex-col items-center overflow-hidden" id='decrease-margin'>
                      <h1 className="text-4xl">50</h1>
                      <p>of {"world's"} most <br /> fascinating minds and</p>
                  </motion.div>
                  <div className="flex flex-col items-center">
                      <h1 className="text-4xl">50</h1>
                      <p>of {"world's"} most <br /> fascinating minds and</p>
                  </div>
              </motion.div>
            </div>
            <div className="h-screen mt-7"></div>
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
