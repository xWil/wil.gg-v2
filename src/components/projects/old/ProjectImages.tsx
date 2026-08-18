import {useImage} from "../../imageview/ImageContext.tsx";

function getImage(image: string, setImage: Function) {
    return (
        <img src={image} alt="Project image" loading="lazy" decoding="async" onClick={() => setImage(image)}
             className="aspect-square object-cover rounded-sm shadow-black shadow-xs cursor-zoom-in transition-transform duration-200 hover:scale-[1.02]"/>
    )
}

function ProjectImages({ images }: { images: string[] } ) {
    const { setImage } = useImage();
    return (
        <div className="justify-end grid grid-cols-2 grid-rows-2 aspect-square gap-2 h-fit w-40 md:w-64 lg:w-96 4xl:w-md p-2 rounded-lg bg-background-light shadow-black shadow-md">
            { images.map((image) => getImage(image, setImage)) }
        </div>
    )
}

export default ProjectImages;
