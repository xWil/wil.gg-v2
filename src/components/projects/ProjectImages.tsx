import {useImage} from "../imageview/ImageContext.tsx";

function ProjectImages({imageSets, active}: { imageSets: string[][], active: number }) {
    const {setImage} = useImage();

    return (
        <div className="relative shrink-0 aspect-square h-fit w-40 md:w-64 lg:w-96 4xl:w-md rounded-lg bg-background-light shadow-black shadow-md">
            {imageSets.map((images, i) => (
                <div key={i}
                     aria-hidden={i !== active}
                     className={`absolute inset-2 grid grid-cols-2 grid-rows-2 gap-2 transition-opacity duration-200 ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {images.map((image) => (
                        <img key={image} src={image} alt="Project image"
                             loading={i === active ? "eager" : "lazy"} decoding="async"
                             onClick={() => setImage(image)}
                             className="size-full aspect-square object-cover rounded-sm shadow-black shadow-xs cursor-zoom-in transition-transform duration-200 hover:scale-[1.02]"/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ProjectImages;
