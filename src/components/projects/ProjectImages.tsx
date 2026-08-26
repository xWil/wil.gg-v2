import {useImage} from "../imageview/ImageContext.tsx";
import {useRef} from "react";
import {observeVisible} from "../../ObserveVisibleHook.tsx";

function ProjectImages({imageSets, active}: { imageSets: string[][], active: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible: boolean = observeVisible(ref);

    const {setImage} = useImage();

    return (
        <div ref={ref} className={`relative shrink-0 aspect-square size-40 md:size-64 lg:size-96 4xl:size-112 rounded-lg bg-background-light shadow-black shadow-md
        transition-transform duration-300 ${isVisible ?  "" : "translate-x-16 opacity-0" }`}>
            {imageSets.map((images, i) => (
                <div key={i}
                     aria-hidden={i !== active}
                     className={`absolute inset-2 grid grid-cols-2 grid-rows-2 gap-2 transition-opacity duration-200 ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {images.map((image) => (
                        <div key={image}
                             className="relative min-w-0 min-h-0 overflow-hidden rounded-sm shadow-black shadow-xs">
                            <img src={image} alt="Project image"
                                 loading={i === active ? "eager" : "lazy"} decoding="async"
                                 onClick={() => setImage(image)}
                                 className="absolute inset-0 block size-full object-cover object-center cursor-zoom-in transition-transform duration-200 hover:scale-[1.02]"/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ProjectImages;
