import Links from "./Links.tsx";
import Navigation from "./Navigation.tsx";
import Profile from "./Profile.tsx";

function Navbar() {
    return (
        <header className="w-full fixed top-0 bg-background flex flex-row justify-between z-50 gap-4 md:gap-10 p-8">
            <Profile/>
            <Navigation/>
            <Links/>
        </header>
    )
}

export default Navbar;
