import {type RefObject, useEffect, useRef, useState} from "react";

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

export function observe(ref: RefObject<HTMLElement | null>, enter: (entry: IntersectionObserverEntry) => void, exit: (entry: IntersectionObserverEntry) => void, options: IntersectionObserverInit, enabled: boolean = true) {
    const enterRef = useRef(enter);
    const exitRef = useRef(exit);
    const optionsRef = useRef(options);
    enterRef.current = enter;
    exitRef.current = exit;
    optionsRef.current = options;

    useEffect(() => {
        const element = ref.current;
        if (!element || !enabled) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                enterRef.current(entry);
            } else {
                exitRef.current(entry);
            }
        }, optionsRef.current);

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, enabled]);
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