import StackList from "./StackList.tsx";

function StackGrid() {
    return (
        <div className="grid grid-cols-4 gap-12">
            <StackList title="Languages" items={["Java", "JS/TS", "HTML & CSS"]}/>
            <StackList title="Frameworks" items={["Spring", "React"]}/>
            <StackList title="Database" items={["MySQL", "PostgreSQL"]}/>
            <StackList title="Other" items={["Tailwind CSS", "Git"]}/>
        </div>
    )
}

export default StackGrid;
