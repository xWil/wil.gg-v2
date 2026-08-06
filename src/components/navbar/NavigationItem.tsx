interface NavigationItemProps {
    anchor: string;
    text: string;
}

function NavigationItem({ anchor, text }: NavigationItemProps) {
    return (
        <a href={anchor} className="px-4 py-1.5 rounded-full text-text-primary sm:max-sm:text-sm font-bold hover:bg-background-light-hover">{text}</a>
    )
}

export default NavigationItem;
