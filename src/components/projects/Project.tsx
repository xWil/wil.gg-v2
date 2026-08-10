import ProjectHeader, {type HeaderProps} from "./ProjectHeader.tsx";
import ProjectDetails from "./ProjectDetails.tsx";
import type {DetailProps} from "./DetailList.tsx";
import ProjectLink, {type ProjectLinkProps} from "./ProjectLink.tsx";
import ProjectImages from "./ProjectImages.tsx";

interface ProjectProps {
    visible: boolean,
    stick: boolean,
    header: HeaderProps,
    description: string,
    details: DetailProps[],
    link: ProjectLinkProps,
    images: string[]
}

function Project({ visible, stick, header, description, details, link, images }: ProjectProps) {
    return (
        <div className={`min-h-screen w-full pb-8 md:pb-16 pt-18 md:pt-32 px-4 md:px-8 lg:px-16 xl:px-24 4xl:px-32 flex flex-col items-center justify-center ${stick ? "sticky top-0" : ""} ${visible ? "visible" : "invisible"}`}>
            <div className="w-full px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-48 4xl:px-64 flex flex-col">
                <span className="xs:max-sm:text-center text-5xl md:text-4xl lg:text-6xl 4xl:text-7xl text-text-primary font-bold mb-12 md:mb-16">Projects</span>
                <div className="w-full h-fit flex gap-4 md:gap-8 items-center justify-between max-sm:flex-col">
                    <div className="justify-start flex flex-col">
                        <ProjectHeader header={header}/>
                        <span className="text-sm md:text-md 4xl:text-xl text-text-secondary max-w-[24ch] md:max-w-[30ch] mb-4 4xl:mb-6">{description}</span>
                        <ProjectDetails detailsArray={details}/>
                        <ProjectLink link={link}/>
                    </div>
                    <ProjectImages images={images}/>
                </div>
            </div>
        </div>
    )
}

export default Project;
