function SectionTitle({ title }: {title: string}) {
    return (
        <span className="w-fit xs:max-sm:text-center text-4xl md:text-5xl lg:text-6xl 4xl:text-7xl text-text-primary font-bold mb-8 md:mb-12 lg:mb-16 select-none transition-colors duration-500 hover:text-text-favourite">{title}</span>
    )
}

export default SectionTitle;
