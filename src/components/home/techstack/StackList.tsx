interface StackListProps {
    title: string
    items: string[]
}

function createListItem(item:string) {
    return (
        <div key={item} className="w-fit md:text-lg text-text-primary transition-normal duration-200 hover:text-white hover:text-shadow-xs hover:text-shadow-[#707070]">{item}</div>
    )
}

function StackList({ title, items }: StackListProps) {
    return (
        <div className="flex flex-col">
            <div className="text-sm text-text-secondary mb-2">{title}</div>
            <div className="flex flex-col gap-1">
                { items.map(item => createListItem(item)) }
            </div>
        </div>
    )
}

export default StackList;
