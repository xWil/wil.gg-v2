import LinkMenu from "./LinkMenu.tsx";
import Links from "./Links.tsx";

function LinkContainer() {
    return (
        <div className="flex justify-end items-center max-xs:hidden">
            <LinkMenu/>
            <div className="xs:max-sm:hidden">
                <Links/>
            </div>
        </div>
    )
}

export default LinkContainer;
