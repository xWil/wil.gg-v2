import NavigationItem from "./NavigationItem.tsx";

function Navigation() {
    return (
        <div className="w-fit flex justify-center items-center">
            <nav className="flex flex-row justify-center items-center gap-1 bg-background-light rounded-4xl p-1.5 border-2 border-solid border-background-light hover:border-background-light-hover max-md:hidden">
                <NavigationItem anchor="#projects" text="Projects"/>
                <NavigationItem anchor="#bio" text="Bio"/>
                <NavigationItem anchor="#contact" text="Contact"/>
            </nav>
        </div>
    )
}

export default Navigation;