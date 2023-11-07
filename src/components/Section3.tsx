"use client";

import {
    AnimationPlaybackControls,
    animate,
    stagger,
    motion,
    useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section3() {
    const ref4 = useRef<HTMLDivElement>(null);
    const animControls3 = useRef<AnimationPlaybackControls>();

    useScroll({
        target: ref4,
        offset: ["start center", "end start"],
    }).scrollYProgress.on("change", (yProgress) => {
        if (!animControls3.current) return;
        animControls3.current.time = yProgress * animControls3.current.duration;
    });

    useEffect(() => {
        animControls3.current = animate([
            [
                "div#ss p",
                { y: 0, opacity: [0, 1] },
                { delay: stagger(10), ease: "easeInOut", duration: 10 },
            ],
        ]);

        animControls3.current.pause();
    }, []);

    return (
        <>
            <div className="" ref={ref4}>
                <div className="bg-black text-white relative h-[350vh]">
                    <div
                        className="w-full h-full flex flex-col items-center"
                        id="ss"
                    >
                        <motion.p
                            style={{ position: "fixed", y: 300, opacity: 0 }}
                            className="xl:w-1/2 w-full sm:w-[84%] md:w-[70%] sm:px-0 px-2   text-center  md:text-xl xl:text-2xl top-[60px] md:top-[90px]  xl:top-[160px]"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 700, opacity: 0 }}
                            className="xl:w-1/2 w-full sm:w-[84%] md:w-[70%]  text-center sm:px-0 px-2  md:text-xl xl:text-2xl top-[240px] md:top-[240px] xl:top-[320px]"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 800, opacity: 0 }}
                            className="xl:w-1/2 w-full sm:w-[84%] md:w-[70%]  text-center sm:px-0 px-2  md:text-xl xl:text-2xl top-[420px] md:top-[390px] xl:top-[460px]"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", y: 900, opacity: 0 }}
                            className="xl:w-1/2 w-[84%] md:w-[70%]  text-center text-2xl top-[480px]"
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
        </>
    );
}
