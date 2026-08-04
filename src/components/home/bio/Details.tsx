import Info from "./Info.tsx";
import CurrentProject from "./CurrentProject.tsx";

function Details() {
    return (
        <div className="w-full flex flex-col gap-8">
            <Info/>
            <CurrentProject/>
        </div>
    )
}

export default Details;
