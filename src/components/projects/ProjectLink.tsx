export interface ProjectLinkProps {
    link: string,
    text: string
}

function ProjectLink({ link }: { link: ProjectLinkProps }) {
    return (
        <a href={link.link} target="_blank" className="flex gap-1.5 items-center">
            <img src="/socials/link.svg" alt="Link icon" decoding="async" loading="lazy" className="size-2 md:size-2.5 4xl:size-3 aspect-square"/>
            <span className="text-text-secondary text-xs md:text-sm 4xl:text-[1rem] hover:text-text-primary hover:underline">{link.text}</span>
        </a>
    )
}

export default ProjectLink;
