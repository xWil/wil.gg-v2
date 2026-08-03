import Links from "./Links.tsx";
import Navigation from "./Navigation.tsx";
import Profile from "./Profile.tsx";

function Navbar() {
    return (
        <header className="w-full fixed top-0 bg-[#0c0c0c55] flex flex-row justify-between z-50 gap-4 md:gap-10 p-4 lg:px-6 4xl:p-8 4xl:px-10">
            <Profile/>
            <Navigation/>
            <Links/>
        </header>
    )
}

export default Navbar;
