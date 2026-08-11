import Navigation from "./Navigation.tsx";
import Profile from "./Profile.tsx";
import LinkContainer from "./links/LinkContainer.tsx";

function Navbar() {
    return (
        <header className="w-full fixed top-0 bg-[#0c0c0cBB] flex flex-row justify-between z-40 gap-3 md:gap-6 p-3 lg:px-4 4xl:p-6 4xl:px-8">
            <Profile/>
            <Navigation/>
            <LinkContainer/>
        </header>
    )
}

export default Navbar;
