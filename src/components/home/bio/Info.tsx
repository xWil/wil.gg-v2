import DescriptionHighlight from "./DescriptionHighlight.tsx";
import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";

function Info() {
    const info = useRef<HTMLDivElement>(null);
    const isInfoVisible: boolean = observeVisible(info);

    return (
        <div ref={info} className={`text-text-secondary md:text-lg text-pretty max-w-[64ch] transition-all duration-1000 ${isInfoVisible ? "" : "-translate-x-10 opacity-0"}`}>
            I am a
            <DescriptionHighlight text=" UK "/>
            based,
            <DescriptionHighlight text=" Oracle certified "/>
            Java developer with
            <DescriptionHighlight text=" 6+ years "/>
            of experience.
        </div>
    )
}

export default Info;
