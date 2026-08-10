import Project from "./Project.tsx";
import {useRef, useState} from "react";
import {observe} from "../../ObserveVisibleHook.tsx";

function Projects() {
    const [firstVisible, setFirstVisible] = useState(false);
    const firstRef = useRef<HTMLDivElement>(null);
    observe(firstRef, () => setFirstVisible(true), () => setFirstVisible(false), {threshold: 1})

    const [secondVisible, setSecondVisible] = useState(false);
    const secondRef = useRef<HTMLDivElement>(null);
    observe(secondRef, () => setSecondVisible(true), () => setSecondVisible(false), {threshold: 1})

    //const [thirdVisible, setThirdVisible] = useState(false);
    //const thirdRef = useRef<HTMLDivElement>(null);
    //observe(thirdRef, () => setThirdVisible(true), () => setThirdVisible(false), {threshold: 1})

    return (
        <section id="projects" className="relative h-fit w-full">
            <Project visible={true} stick={firstVisible}
                     header={{ icon: "/projects/imposter/imposter-logo.svg", alt: "Imposter icon", name: "Imposter" }}
                     description="Imposter is a web-based party game where one player is designated as the imposter, and everyone has to guess who!"
                     details={[
                         {category: "Language", details: "Java, JavaScript, HTML, CSS"},
                         {category: "Frontend", details: "React, Tailwind"},
                         {category: "Backend", details: "Spring / SpringBoot"}
                     ]} link={{ link: "https://imposter.wil.gg/", text: "imposter.wil.gg" }}
                     images={["/projects/imposter/imposter-lobby.png", "/projects/imposter/imposter-question.png", "/projects/imposter/imposter-answers.png", "/projects/imposter/imposter-leaderboard.png"]}
            />
            <Project visible={!firstVisible} stick={secondVisible}
                     header={{ icon: "/pfp.gif", alt: "Project icon", name: "VLRScraper" }}
                     description="VLRScraper is a web-scraper and statistics analysis tool for VCT match data, sourced from VLR."
                     details={[
                         {category: "Language", details: "Java, JavaFX, CSS"},
                         {category: "Database", details: "MySQL, SQLite"}
                     ]} link={{ link: "https://https://github.com/xWil", text: "github" }}
                     images={["/projects/imposter/imposter-lobby.png", "/projects/imposter/imposter-question.png", "/projects/imposter/imposter-answers.png", "/projects/imposter/imposter-leaderboard.png"]}
            />
            <Project visible={!secondVisible} stick={true}
                     header={{ icon: "/pfp.gif", alt: "Project icon", name: "SubwayCrafters" }}
                     description="SubwayCrafters is a feature-rich, infinitly generating runner game, built on Spigot."
                     details={[
                         {category: "Language", details: "Java"},
                         {category: "Platform", details: "Spigot, Paper"},
                         {category: "Database", details: "PostgreSQL, MySQL, SQLite"}
                     ]} link={{ link: "https://https://github.com/xWil", text: "github" }}
                     images={["/projects/imposter/imposter-lobby.png", "/projects/imposter/imposter-question.png", "/projects/imposter/imposter-answers.png", "/projects/imposter/imposter-leaderboard.png"]}
            />
            <div className="h-screen w-full invisible"/>
            <div ref={firstRef} className="absolute top-[25%] size-2"/>
            <div ref={secondRef} className="absolute top-[50%] size-2"/>
        </section>
    )
}

export default Projects;
