import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function Greeting() {
    const greet = useRef<HTMLDivElement>(null);
    const isGreetVisible: boolean = observeVisible(greet);

    const name = useRef<HTMLDivElement>(null);
    const isNameVisible: boolean = observeVisible(name);

    return (
        <div className="flex flex-col">
            <div ref={greet} className={`text-text-secondary text-2xl md:text-4xl select-none transition-all duration-500 ${isGreetVisible ?  "" : "-translate-y-10 opacity-0" }`}>Hi, I'm</div>
            <div ref={name} className={`text-text-primary font-bold text-7xl md:text-9xl select-none -translate-y-2 transition-all duration-500 hover:text-text-favourite ${isNameVisible ? "" : "-translate-x-10 opacity-0"}`}>Wil</div>
        </div>
    )
}

export default Greeting;
