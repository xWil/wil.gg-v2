function ProjectDescription({ description }: { description: string }) {
    return (
        <span className={`text-sm md:text-[1rem] 4xl:text-xl text-text-secondary max-w-[24ch] md:max-w-[30ch] mb-4 4xl:mb-6`}>{description}</span>
    )
}

export default ProjectDescription;
