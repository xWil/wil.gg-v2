import {useImage} from "./ImageContext.tsx";

function getImageName(source: string): string[] {
    let parts = source.split("/");
    let name = parts[parts.length - 1];
    name = parts[parts.length - 1].substring(0, name.lastIndexOf(".")).replaceAll("-", " ");
    return [parts[parts.length - 1], name]
}

function ImageView() {
    const { image, setImage } = useImage();
    const name = image ? getImageName(image) : ""

    return (
        <div onClick={() => setImage(null)}
             className={`fixed h-screen w-full flex items-center justify-center bg-[#000000AA] z-50 px-4 py-16 transition-all duration-300 ${image ? "visible opacity-100" : "invisible opacity-0"}`}>
            {image ?
                <img src={image} alt={name[1]} loading="eager" decoding="async" onClick={(e) => e.stopPropagation()}
                     className="max-h-full max-w-full z-10 object-contain"/>
                : null}
            <div className="absolute z-10 top-4 right-4 bg-background-light p-1 rounded-full border-2 border-background-light transition-all duration-300 hover:border-background-light-hover hover:rotate-8">
                <img src="/icons/close.svg" alt="Close icon" loading="lazy" decoding="async" className="size-5 aspect-square"/>
            </div>
            <span className="absolute top-6  z-10 text-white text-sm md:text-[1rem]">{name[0]}</span>
        </div>
    )
}

export default ImageView;
