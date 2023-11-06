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
                { delay: stagger(10), ease: "easeInOut", duration: 10 },
            ],
        ]);

        animControls.current.pause();
    }, []);

    return (
        <>
            <div className="" ref={ref}>
                <div className="bg-white text-black relative h-[350vh]">
                    <div
                        className="w-full h-full flex flex-col items-center"
                        id="s"
                    >
                        <motion.p className="text-7xl text-center font-bold" style={{position: 'fixed', top:'40px'}} >The Purpose</motion.p>
                        <motion.p
                            style={{ position: "fixed", top: "160px", y: 200 }}
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
