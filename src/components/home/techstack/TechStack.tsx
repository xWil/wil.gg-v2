import StackGrid from "./StackGrid.tsx";
import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function TechStack() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible: boolean = observeVisible(ref);

    return (
        <div ref={ref} className={`flex flex-col transition-all duration-800 ${isVisible ? "" : "translate-y-10 opacity-0"}`}>
            <div className="text-text-secondary mb-4">Tech Stack</div>
            <StackGrid/>
        </div>
    )
}

export default TechStack;
