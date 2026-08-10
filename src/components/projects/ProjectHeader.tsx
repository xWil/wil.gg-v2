export interface HeaderProps {
    icon: string,
    alt: string,
    name: string,
}

function ProjectHeader({ header }: {header: HeaderProps}) {
    return (
        <div className="flex gap-2 items-center mb-4 4xl:mb-6">
            <img loading="lazy" decoding="async" src={header.icon} alt={header.alt} className="size-4 md:size-6 4xl:size-9 aspect-square"/>
            <span className="text-text-primary text-xl md:text-2xl lg:text-3xl 4xl:text-5xl">{header.name}</span>
        </div>
    )
}

export default ProjectHeader;
