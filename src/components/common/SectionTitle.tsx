function SectionTitle({ title }: {title: string}) {
    return (
        <span className="w-fit xs:max-sm:text-center text-4xl md:text-5xl lg:text-6xl 4xl:text-7xl text-text-primary font-bold mb-12 md:mb-16 transition-colors duration-500 hover:text-text-favourite">{title}</span>
    )
}

export default SectionTitle;
