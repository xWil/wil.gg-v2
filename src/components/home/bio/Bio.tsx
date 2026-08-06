import Greeting from "./Greeting.tsx";
import Details from "./Details.tsx";

function Bio() {
    return (
        <div className="mb-16 w-full flex flex-col gap-6">
            <Greeting/>
            <Details/>
        </div>
    )
}

export default Bio;
