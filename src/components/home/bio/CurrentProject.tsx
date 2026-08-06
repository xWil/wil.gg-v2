import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function CurrentProject() {
    const proj = useRef<HTMLDivElement>(null);
    const isProjVisible: boolean = observeVisible(proj);

    return (
        <div ref={proj} className={`flex gap-2 transition-all duration-1000 ${isProjVisible ? "" : "-translate-x-10 opacity-0"}`}>
            <div className="relative flex h-2 w-2 mt-[0.3rem] md:mt-[0.4rem]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
            </div>
            <span className="text-text-secondary text-xs md:text-sm">Currently working on a statistics and data analysis tool for VCT match data.</span>
        </div>
    )
}

export default CurrentProject;
