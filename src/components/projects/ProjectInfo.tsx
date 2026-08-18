import ProjectHeader from "./ProjectHeader.tsx";
import ProjectDescription from "./ProjectDescription.tsx";
import ProjectDetails from "./ProjectDetails.tsx";
import ProjectLink from "./ProjectLink.tsx";
import type {ProjectData} from "./ProjectData.ts";

function ProjectInfo({project, position}: { project: ProjectData, position: number }) {
    const state = position === 0 // 0 = active, < 0 scrolled past, > 0 upcoming
        ? "translate-y-0 opacity-100"
        : position < 0
            ? "-translate-y-16 opacity-0 pointer-events-none"
            : "translate-y-16 opacity-0 pointer-events-none";

    return (
        <div aria-hidden={position !== 0}
             className={`col-start-1 row-start-1 flex flex-col justify-start duration-150 [transition-property:translate,opacity] ${state}`}>
            <ProjectHeader header={project.header}/>
            <ProjectDescription description={project.description}/>
            <ProjectDetails detailsArray={project.details}/>
            {project.link ? <ProjectLink link={project.link}/> : null}
        </div>
    );
}

export default ProjectInfo;
