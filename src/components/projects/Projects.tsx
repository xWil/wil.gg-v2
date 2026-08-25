import {useEffect, useRef, useState} from "react";
import ProjectInfo from "./ProjectInfo.tsx";
import ProjectImages from "./ProjectImages.tsx";
import {projects} from "./ProjectData.tsx";
import SectionTitle from "../common/SectionTitle.tsx";

function Projects() {
    const [active, setActive] = useState(0);
    const bands = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                setActive(Number((entry.target as HTMLElement).dataset.index));
            }
        }, {rootMargin: "-50% 0px -50% 0px", threshold: 0});

        bands.current.forEach((band) => band && observer.observe(band));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="relative w-full" style={{height: `${projects.length * 100}dvh`}}>
            {projects.map((project, i) => (
                <div key={project.header.name} data-index={i}
                     ref={(el) => { bands.current[i] = el; }}
                     className="absolute left-0 w-full h-dvh pointer-events-none"
                     style={{top: `${i * 100}dvh`}}/>
            ))}

            <div className="sticky top-0 h-dvh w-full pb-8 md:pb-16 pt-18 md:pt-32 px-4 md:px-8 lg:px-16 xl:px-24 4xl:px-32 flex flex-col items-center justify-center">
                <div className="w-full px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-48 4xl:px-64 flex flex-col">
                    <SectionTitle title="Projects"/>

                    <div className="w-full h-fit flex gap-4 md:gap-8 items-center justify-between max-sm:flex-col">
                        <div className="grid">
                            {projects.map((project, i) => (
                                <ProjectInfo key={project.header.name} project={project} position={i - active}/>
                            ))}
                        </div>

                        <ProjectImages imageSets={projects.map((project) => project.images)} active={active}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
