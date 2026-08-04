import TechStack from "./techstack/TechStack.tsx";

function About() {
    return (
        <div id="about" className="h-screen pb-18 pt-34 px-8 md:px-12 lg:px-16 flex flex-col">
            <div className={"w-full h-72"}/>
            <TechStack/>
        </div>
    )
}

export default About;
