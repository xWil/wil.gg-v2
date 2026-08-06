import TechStack from "./techstack/TechStack.tsx";
import Bio from "./bio/Bio.tsx";

function About() {
    return (
        <section id="about" className="min-h-screen pb-16 pt-32 px-8 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center">
            <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32 w-fit h-fit">
                <Bio/>
                <TechStack/>
            </div>
        </section>
    )
}

export default About;
