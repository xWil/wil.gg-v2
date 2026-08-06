import {useState} from "react";
import Links from "./Links";

function LinkMenu() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="contents sm:hidden">
            <div onClick={() => setDropdown(!dropdown)} className="p-2.5 bg-background-light rounded-full aspect-square border-2 border-background-light transition-normal duration-300 cursor-pointer hover:border-background-light-hover hover:rotate-8">
                <img alt="link" loading="lazy" decoding="async" src="/socials/link.svg" className="w-6 h-6 md:w-8 md:h-8"/>
            </div>
            <div className={`absolute p-2 bg-background-light rounded-full mt-28 border-2 border-background-light transition-all duration-300 ${dropdown ? "opacity-100 visible" : "opacity-0 invisible"} hover:border-background-light-hover`}>
                <Links/>
            </div>
        </div>
    )
}

export default LinkMenu;
