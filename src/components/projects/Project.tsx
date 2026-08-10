import ProjectHeader, {type HeaderProps} from "./ProjectHeader.tsx";
import ProjectDetails from "./ProjectDetails.tsx";
import type {DetailProps} from "./DetailList.tsx";
import ProjectLink, {type ProjectLinkProps} from "./ProjectLink.tsx";

interface ProjectProps {
    visible: boolean,
    stick: boolean,
    header: HeaderProps,
    description: string,
    details: DetailProps[]
    link: ProjectLinkProps
}

function Project({ visible, stick, header, description, details, link }: ProjectProps) {
    return (
        <div className={`min-h-screen w-full pb-16 pt-32 px-8 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center ${stick ? "sticky top-0" : ""} ${visible ? "visible" : "invisible"}`}>
            <div className="px-4 md:px-12 lg:px-20 xl:px-28 w-full h-fit flex flex-col">
                <span className="text-6xl text-text-primary font-bold mb-8">Projects</span>
                <ProjectHeader header={header}/>
                <span className="text-md text-text-secondary max-w-[30ch] mb-4">{description}</span>
                <ProjectDetails detailsArray={details}/>
                <ProjectLink link={link}/>
            </div>
        </div>
    )
}

export default Project;
