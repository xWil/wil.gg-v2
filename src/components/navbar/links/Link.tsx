interface LinkProps {
    link: string;
    image: string;
    alt: string;
}

function Link({ link, image, alt }: LinkProps) {
    return (
        <a href={link} target="_blank">
            <img alt={alt} src={image} draggable="false" loading="lazy" decoding="async" className="size-6 md:size-8 transition-normal duration-300 hover:rotate-8"/>
        </a>
    )
}

export default Link;
