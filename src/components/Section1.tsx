"use client";

import {
    AnimationPlaybackControls,
    animate,
    stagger,
    motion,
    useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { InteractiveMarquee } from "./Marquee";

export default function Section1() {
    const ref = useRef<HTMLDivElement>(null);
    const animControls = useRef<AnimationPlaybackControls>();

    useScroll({
        target: ref,
        offset: ["start center", "end start"],
    }).scrollYProgress.on("change", (yProgress) => {
        if (!animControls.current) return;
        animControls.current.time = yProgress * animControls.current.duration;
    });

    useEffect(() => {
        animControls.current = animate([
            [
                "div#s p",
                { y: 0, opacity: [0, 1] },
                { delay: stagger(10.1), ease: "easeInOut", duration: 10 },
            ],
        ]);

        animControls.current.pause();
    }, []);

    return (
        <>
            <div className="" ref={ref}>
                <div className="bg-white text-black relative h-[400vh]">
                    <div
                        className="w-full h-full flex flex-col items-center"
                        id="s"
                    >
                        <motion.p
                            className="text-4xl md:text-5xl xl:text-6xl lg:text-7xl text-center font-bold "
                            style={{
                                position: "fixed",
                                top: "40px",
                                opacity: 0,
                            }}
                        >
                            The Purpose
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 200, opacity: 0 }}
                            className="xl:w-1/2 w-full sm:w-[84%] md:w-[70%] sm:px-0 px-2 text-center md:text-xl xl:text-2xl top-[100px] md:top-[120px] lg:top-[140px] xl:top-[180px] "
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 700, opacity: 0 }}
                            className="xl:w-1/2 w-full sm:w-[84%] md:w-[70%] text-center sm:px-0 px-2  md:text-xl xl:text-2xl top-[250px] md:top-[260px] lg:top-[270px] xl:top-[320px] "
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 800, opacity: 0 }}
                            className="xl:w-1/2 w-full sm:w-[84%] md:w-[70%] text-center sm:px-0 px-2  md:text-xl xl:text-2xl top-[420px] md:top-[410px] lg:top-[400px] xl:top-[460px] "
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 900, opacity: 0 }}
                            className="w-1/2 text-center text-2xl"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white flex">
                <InteractiveMarquee speed={1}>
                    <button draggable="false">50 WRITERS</button>
                    <button draggable="false" className="outline-text">
                        1 TOPIC
                    </button>
                    <button draggable="false" className="outline-text">
                        1 ROOM
                    </button>
                    <button draggable="false">50 WRITERS</button>
                    <button draggable="false">50 WRITERS</button>
                    <button draggable="false" className="outline-text">
                        1 TOPIC
                    </button>
                    <button draggable="false" className="outline-text">
                        1 TOPIC
                    </button>
                    <button draggable="false" className="outline-text">
                        1 ROOM
                    </button>
                </InteractiveMarquee>
            </div>
        </>
    );
}
