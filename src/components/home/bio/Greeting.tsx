import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function Greeting() {
    const greet = useRef<HTMLSpanElement>(null);
    const isGreetVisible: boolean = observeVisible(greet);

    const name = useRef<HTMLSpanElement>(null);
    const isNameVisible: boolean = observeVisible(name);

    return (
        <div className="flex flex-col w-fit text-left">
            <span ref={greet} className={`text-text-secondary text-2xl md:text-2xl select-none transition-all duration-500 ${isGreetVisible ?  "" : "-translate-y-10 opacity-0" }`}>Hi, I'm</span>
            <span ref={name} className={`text-text-primary font-bold text-6xl md:text-8xl select-none -translate-y-2 transition-all duration-500 hover:text-text-favourite ${isNameVisible ? "" : "-translate-x-10 opacity-0"}`}>Will</span>
        </div>
    )
}

export default Greeting;
