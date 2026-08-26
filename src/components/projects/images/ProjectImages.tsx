import {useRef} from "react";
import {observeVisible} from "../../../ObserveVisibleHook.tsx";
import ProjectImage from "./ProjectImage.tsx";
import ImageScroller from "./ImageScroller.tsx";

function ProjectImages({imageSets, active}: { imageSets: string[][], active: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible: boolean = observeVisible(ref);

    return (
        <div ref={ref} className={`relative shrink-0 aspect-square size-40 md:size-64 lg:size-96 4xl:size-112 rounded-lg bg-background-light shadow-black shadow-md
        transition-transform duration-300 ${isVisible ?  "" : "translate-x-16 opacity-0" }`}>
            {imageSets.map((images, i) => (
                <div key={i} aria-hidden={i !== active} className={`${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <div className={`max-md:hidden absolute inset-2 grid grid-cols-2 grid-rows-2 gap-2 transition-opacity duration-200`}>
                        { images.map((image) => (<ProjectImage image={image} isActive={i === active}/>)) }
                    </div>
                    <ImageScroller images={images} isActive={i === active}/>
                </div>
            ))}
        </div>
    );
}

export default ProjectImages;
