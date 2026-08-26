import ProjectImage from "./ProjectImage.tsx";
import {useState} from "react";
import ScrollButton from "./ScrollButton.tsx";

function ImageScroller({ images, isActive }: { images: string[], isActive: boolean}) {
    const [image, setImage] = useState(0);

    const scrollLeft = () => {
        if (image == 0) setImage(images.length - 1);
        else setImage(image - 1);
    }

    const scrollRight = () => {
        if (image == images.length - 1) setImage(0)
        else setImage(image + 1);
    }

    return(
        <div className={`md:hidden absolute inset-2 grid transition-opacity duration-200`}>
            <ProjectImage image={images[image]} isActive={isActive}/>
            <ScrollButton onClick={scrollLeft} left={true}/>
            <ScrollButton onClick={scrollRight} left={false}/>
        </div>
    )
}

export default ImageScroller;