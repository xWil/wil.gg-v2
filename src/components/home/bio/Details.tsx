import Info from "./Info.tsx";
import CurrentProject from "./CurrentProject.tsx";
import Location from "./Location.tsx";

function Details() {
    return (
        <div className="w-full flex flex-col gap-8">
            <Info/>
            <div>
                <Location/>
                <CurrentProject/>
            </div>
        </div>
    )
}

export default Details;
