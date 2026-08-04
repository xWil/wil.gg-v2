interface StackListProps {
    title: string
    items: string[]
}

function createListItem(item:string) {
    return (
        <div key={item} className="w-fit text-xl text-text-primary transition-normal duration-200 hover:text-white">{item}</div>
    )
}

function StackList({ title, items }: StackListProps) {
    return (
        <div className="flex flex-col">
            <div className="text-lg text-text-secondary mb-2">{title}</div>
            <div className="flex flex-col gap-2">
                { items.map(item => createListItem(item)) }
            </div>
        </div>
    )
}

export default StackList;
