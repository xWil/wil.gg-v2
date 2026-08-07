import DetailList, {type DetailProps} from "./DetailList.tsx";

function createDetailList(details: DetailProps) {
    return (
        <DetailList details={details}/>
    )
}

function ProjectDetails({ detailsArray }: {detailsArray: DetailProps[]}) {
    return (
        <div className="flex flex-col w-full h-fit gap-0.5 mb-4">
            { detailsArray.map((details: DetailProps) => createDetailList(details)) }
        </div>
    )
}

export default ProjectDetails;