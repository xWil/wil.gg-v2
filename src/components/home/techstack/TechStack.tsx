import StackGrid from "./StackGrid.tsx";
import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function TechStack() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible: boolean = observeVisible(ref);

    return (
        <div ref={ref} className={`flex flex-col items-start transition-all duration-800 ${isVisible ? "" : "translate-y-10 opacity-0"}`}>
            <div className="text-xl text-text-secondary mb-6">Tech Stack</div>
            <StackGrid/>
        </div>
    )
}

export default TechStack;
