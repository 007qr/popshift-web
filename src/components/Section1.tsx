"use client";

import {
    AnimationPlaybackControls,
    animate,
    stagger,
    useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section1() {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerRef2 = useRef<HTMLDivElement>(null);
    const animControls = useRef<AnimationPlaybackControls>();
    const animControls2 = useRef<AnimationPlaybackControls>();


    useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    }).scrollYProgress.on("change", (yProgress) => {
        if (!animControls.current) return;
        animControls.current.time = yProgress * animControls.current.duration;
    });

    useScroll({
        target: containerRef2,
        offset: ['start end', 'end start']
    }).scrollYProgress.on("change", (yProgress) => {
        if (!animControls2.current) return;
        animControls2.current.time = yProgress * animControls2.current.duration;
    })

    useEffect(() => {
        animControls.current = animate([
            [
                "div p",
                {
                    transform: [
                        "translate3d(0, 0, 0)",
                        "translate3d(0, -100%, 0)",
                    ],
                },
                { delay: stagger(1), duration: 9, ease: "easeIn" },
            ],
        ]);

        animControls2.current = animate([
            // ["#static-container h3", {top: 0}, {}]
        ])

        animControls.current.pause();
        animControls2.current.pause();
    }, []);

    return (
        <>
            <div
                className="items-center justify-center h-screen text-[250px] bg-black text-white font-bold flex"
                ref={containerRef}
            >
                <div className="sticky top-0 flex items-center justify-center h-min">
                    <p className="">P</p>
                    <p className="">O</p>
                    <p className="">P</p>
                    <p className="">S</p>
                    <p className="">H</p>
                    <p className="">I</p>
                    <p className="">F</p>
                    <p className="">T</p>
                </div>
            </div>
            <div className="h-[100svh] bg-black" ref={containerRef2}>
                <div className="flex flex-col items-center justify-center relative h-screen" id='static-container'>
                    <h3 className="bg-black text-white text-3xl text-center sticky top-20 mt-[400px]">
                        Convening {"Hollywood's"}
                    </h3>
                    <h3 className="mt-[200px] bg-black text-white text-3xl sticky text-center top-[120px]">
                        Most influential storytellers
                    </h3>
                    <h3 className="mt-[200px] bg-black text-white text-3xl sticky text-center top-[180px]">
                        and the {"world's"}
                    </h3>
                    <h3 className="mt-[200px] mb-[300px] bg-black text-white  text-3xl sticky text-center top-[500px]">
                        most insightful, interseting, and important people
                        Privately and intimately
                    </h3>
                </div>
                    <div className="h-[20svh] bg-black">l</div>
            </div>
        </>
    );
}
