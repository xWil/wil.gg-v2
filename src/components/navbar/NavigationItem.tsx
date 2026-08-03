interface NavigationItemProps {
    anchor: string;
    text: string;
}

function NavigationItem({ anchor, text }: NavigationItemProps) {
    return (
        <a href={anchor} className="px-5 py-2 rounded-full text-text-primary text-lg font-bold hover:bg-background-light-hover">{text}</a>
    )
}

export default NavigationItem;
