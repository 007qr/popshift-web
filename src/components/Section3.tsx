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
                            style={{ position: "fixed", top: "160px", y: 300 }}
                            className="w-1/2 text-center text-2xl"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", top: "320px", y: 700 }}
                            className="w-1/2 text-center text-2xl"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", top: "460px", y: 800 }}
                            className="w-1/2 text-center text-2xl"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis aut animi asperiores itaque
                            reprehenderit, quam, modi reiciendis neque harum
                            fugiat alias perspiciatis! Officia voluptates
                            recusandae nostrum ea facilis earum quod?
                        </motion.p>
                        <motion.p
                            style={{ position: "fixed", top: "480px", y: 900 }}
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
        </>
    );
}
