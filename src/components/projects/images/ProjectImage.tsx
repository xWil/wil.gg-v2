import {useImage} from "../../imageview/ImageContext.tsx";

export interface ProjectImageProps {
    image: string
    isActive: boolean
    className?: string
}

function ProjectImage({ image, isActive, className }: ProjectImageProps) {
    const {setImage} = useImage();
    return (
        <div key={image}
             className={`relative min-w-0 min-h-0 overflow-hidden rounded-sm shadow-black shadow-xs transition-transform duration-200 hover:scale-[1.02] ${className}`}>
            <img src={image} alt="Project image"
                 loading={isActive ? "eager" : "lazy"} decoding="async"
                 onClick={() => setImage(image)}
                 className="absolute inset-0 block size-full object-cover object-center cursor-zoom-in"/>
        </div>
    )
}

export default ProjectImage;
