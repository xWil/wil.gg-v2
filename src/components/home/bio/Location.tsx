import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function Location() {
    const loc = useRef<HTMLDivElement>(null);
    const isLocVisible: boolean = observeVisible(loc);

    return (
        <div ref={loc} className={`flex gap-2 transition-all duration-1000 items-center mb-1 ${isLocVisible ? "" : "-translate-x-10 opacity-0"}`}>
            <img src="/icons/pin.svg" alt="Location icon" className="size-4"/>
            <span className="text-text-secondary text-xs md:text-sm">Southampton, UK</span>
        </div>
    )
}

export default Location;
