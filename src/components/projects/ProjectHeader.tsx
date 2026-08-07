export interface HeaderProps {
    icon: string,
    alt: string,
    name: string,
}

function ProjectHeader({ header }: {header: HeaderProps}) {
    return (
        <div className="flex gap-2 items-center mb-4">
            <img loading="lazy" decoding="async" src={header.icon} alt={header.alt} className="size-6 aspect-square"/>
            <span className="text-text-primary text-3xl">{header.name}</span>
        </div>
    )
}

export default ProjectHeader;
