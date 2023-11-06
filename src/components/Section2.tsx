import {
    AnimationPlaybackControls,
    animate,
    stagger,
    useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { InteractiveMarquee } from "./Marquee";

export default function Section2() {
    const ref3 = useRef<HTMLDivElement>(null);
    const animControls2 = useRef<AnimationPlaybackControls>();

    useScroll({
        target: ref3,
        offset: ['start start', 'end start']
    }).scrollYProgress.on("change", (yProgress) => {
        if (!animControls2.current) return;
        animControls2.current.time = yProgress * animControls2.current.duration;
    })


    useEffect(() => {
        animControls2.current = animate([
            [
                "div#p p",
                {
                    transform: [
                        "translate3d(0, 0, 0)",
                        "translate3d(0, -100%, 0)",
                    ],
                },
                { delay: stagger(1), duration: 7, ease: "easeIn" },
            ],
        ]);

        animControls2.current.pause();
    }, []);

    return (
        <>
            <div className="items-center justify-center h-screen text-[250px] bg-black text-white font-bold flex" ref={ref3}>
                <div
                    className="sticky top-0 flex items-center justify-center h-min"
                    id="p"
                >
                    <p>I</p>
                    <p>N</p>
                    <p>V</p>
                    <p>E</p>
                    <p>N</p>
                    <p>T</p>
                </div>
            </div>

        </>
    );
}
