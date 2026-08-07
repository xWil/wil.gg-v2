export interface ProjectLinkProps {
    link: string,
    text: string
}

function ProjectLink({ link }: { link: ProjectLinkProps }) {
    return (
        <a href={link.link} target="_blank" className="flex gap-1.5 items-center mb-4">
            <img src="/socials/link.svg" alt="Link icon" decoding="async" loading="lazy" className="size-2.5 aspect-square"/>
            <span className="text-text-secondary text-sm hover:text-text-primary hover:underline">{link.text}</span>
        </a>
    )
}

export default ProjectLink;
