export interface DetailProps {
    category: string
    details: string
}

function DetailList({ details }: { details: DetailProps }) {
    return (
        <div className="w-full text-text-secondary text-xs md:text-sm 4xl:text-[1rem]">
            <span className="text-text-primary font-bold">{details.category}: </span>
            {details.details}
        </div>
    )
}

export default DetailList;
