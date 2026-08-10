function getImage(image: string) {
    return (
        <img src={image} alt="Project image" className="aspect-square object-cover rounded-sm shadow-black shadow-xs"/>
    )
}

function ProjectImages({ images }: { images: string[] } ) {
    return (
        <div className="justify-end grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-2 h-fit xs:w-16 sm:w-32 md:aspect-square md:size-64 lg:size-96 p-2 rounded-lg bg-background-light shadow-black shadow-md">
            { images.map((image) => getImage(image)) }
        </div>
    )
}

export default ProjectImages;
