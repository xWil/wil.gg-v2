import {type RefObject, useEffect, useState} from "react";

export function observeVisible(ref: RefObject<HTMLElement | null>): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.disconnect();
            }
        });

        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}

export function observe(ref: RefObject<HTMLElement | null>, enter: Function, exit: Function, options: IntersectionObserverInit) {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                enter();
            } else {
                exit();
            }
        }, options)

        observer.observe(element);
    }, []);
}

export function observeMultiple(refs: RefObject<HTMLElement | null>[], enter: Function, exit: Function, options: IntersectionObserverInit) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    enter();
                } else {
                    exit();
                }
            });
        }, options)

        refs.forEach(ref => {
            const element = ref.current;
            if (!element) return;
            observer.observe(element);
        });
    }, []);
}