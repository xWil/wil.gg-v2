import TechStack from "./techstack/TechStack.tsx";
import Bio from "./bio/Bio.tsx";

function About() {
    return (
        <section id="about" className="min-h-screen pb-18 pt-34 px-8 md:px-32 lg:px-40 xl:px-48 flex flex-col items-center justify-center">
            <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32 w-fit h-fit">
                <Bio/>
                <TechStack/>
            </div>
        </section>
    )
}

export default About;
