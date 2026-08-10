function getImage(image: string) {
    return (
        <img src={image} alt="Project image" className="aspect-square object-cover rounded-sm shadow-black shadow-xs"/>
    )
}

function ProjectImages({ images }: { images: string[] } ) {
    return (
        <div className="justify-end grid grid-cols-2 grid-rows-2 aspect-square gap-2 h-fit w-40 md:w-64 lg:w-96 4xl:w-md p-2 rounded-lg bg-background-light shadow-black shadow-md">
            { images.map((image) => getImage(image)) }
        </div>
    )
}

export default ProjectImages;
