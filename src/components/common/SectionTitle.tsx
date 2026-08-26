import {useRef} from "react";
import {observeVisible} from "../../ObserveVisibleHook.tsx";

function SectionTitle({ title }: {title: string}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isVisible: boolean = observeVisible(ref);

    return (
        <span ref={ref} className={`w-fit xs:max-sm:text-center text-4xl md:text-5xl lg:text-6xl 4xl:text-7xl text-text-primary font-bold mb-8 md:mb-12 lg:mb-16 select-none
        transition-all duration-300 hover:text-text-favourite ${isVisible ?  "" : "-translate-x-10 opacity-0" }`}>
            {title}
        </span>
    )
}

export default SectionTitle;
