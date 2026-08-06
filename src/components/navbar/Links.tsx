import Link from "./Link.tsx";

function Links() {
    return (
        <div className="flex flex-row gap-1.5 ml-2 w-fit justify-end items-center">
            <Link link="https://github.com/xWil" alt="Github" image="/socials/github.svg"/>
            <Link link="https://discord.com/users/774392801521041439" alt="Discord" image="/socials/discord.svg"/>
        </div>
    )
}

export default Links;
