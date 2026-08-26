import ProjectImage from "./ProjectImage.tsx";
import {useEffect, useRef, useState} from "react";
import ScrollButton from "./ScrollButton.tsx";

// must match the duration class
const DURATION = 300;

// how many clicks ahead remembered
const MAX_QUEUED = 2;

function ImageScroller({images, isActive}: { images: string[], isActive: boolean }) {
    const loop = images.length > 1;
    // [lastClone, ...images, firstClone]
    const slides = loop ? [images[images.length - 1], ...images, images[0]] : images;

    const [index, setIndex] = useState(loop ? 1 : 0);
    const [animate, setAnimate] = useState(true);

    // mirror of index so the timer callbacks can read it synchronously
    const indexRef = useRef(index);
    const moving = useRef(false);
    const queued = useRef(0);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    function setIdx(next: number) {
        indexRef.current = next;
        setIndex(next);
    }

    function go(dir: 1 | -1) {
        if (!loop) return;
        if (moving.current || !animate) {
            // opposite directions cancel out, and we cap the backlog
            queued.current = Math.max(-MAX_QUEUED, Math.min(MAX_QUEUED, queued.current + dir));
            return;
        }
        step(dir);
    }

    function step(dir: number) {
        moving.current = true;
        setIdx(indexRef.current + dir);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(settle, DURATION);
    }

    function settle() {
        moving.current = false;
        const i = indexRef.current;
        if (i === 0) { // last clone
            setAnimate(false);
            setIdx(images.length);
        } else if (i === slides.length - 1) { // first clone
            setAnimate(false);
            setIdx(1);
        } else {
            flush();
        }
    }

    function flush() {
        if (queued.current === 0) return;
        const dir = Math.sign(queued.current);
        queued.current -= dir;
        step(dir);
    }

    // re-enable the transition one frame after snap, then continue
    useEffect(() => {
        if (animate) return;
        const id = requestAnimationFrame(() => requestAnimationFrame(() => {
            setAnimate(true);
            flush();
        }));
        return () => cancelAnimationFrame(id);
    }, [animate]);

    useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

    return (
        <div className="md:hidden absolute inset-2">
            <div className="relative size-full overflow-hidden rounded-sm">
                <div style={{transform: `translateX(-${index * 100}%)`}}
                     className={`flex size-full ${animate ? "transition-transform duration-300 ease-out" : ""}`}>
                    {slides.map((image, i) => (
                        <div key={`${image}-${i}`} className="size-full shrink-0">
                            <ProjectImage image={image} isActive={isActive} className="size-full"/>
                        </div>
                    ))}
                </div>
            </div>

            <ScrollButton onClick={() => go(-1)} left={true}/>
            <ScrollButton onClick={() => go(1)} left={false}/>
        </div>
    )
}


export default ImageScroller;