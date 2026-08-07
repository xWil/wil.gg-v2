export interface DetailProps {
    category: string
    details: string
}

function DetailList({ details }: { details: DetailProps }) {
    return (
        <div className="w-full text-text-secondary text-sm">
            <span className="text-text-primary text-sm font-bold">{details.category}: </span>
            {details.details}
        </div>
    )
}

export default DetailList;
