function DescriptionHighlight( { text }: { text: string } ) {
    return (
        <span className="text-text-primary transition-normal duration-150 hover:text-white hover:text-shadow-xs hover:text-shadow-[#707070]">{text}</span>
    )
}

export default DescriptionHighlight;
