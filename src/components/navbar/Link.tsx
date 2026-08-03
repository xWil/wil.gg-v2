interface LinkProps {
    link: string;
    image: string;
    alt: string;
}

function Link({ link, image, alt }: LinkProps) {
    return (
        <a href={link} target="_blank">
            <img alt={alt} src={image} draggable="false" loading="lazy" decoding="async" className="w-8 h-8 md:w-10 md:h-10 transition-normal duration-300 hover:rotate-8"/>
        </a>
    )
}

export default Link;
