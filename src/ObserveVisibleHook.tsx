import {type RefObject, useEffect, useState} from "react";

export function observeVisible(ref: RefObject<HTMLElement | null>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}