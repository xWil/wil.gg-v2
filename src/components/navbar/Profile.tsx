function Profile() {
    return (
        <div className="flex items-center gap-4 mr-2 w-fit justify-start">
            <a href="/" className="size-12 aspect-square rounded-full transition-normal duration-300 hover:rotate-6">
                <img alt="Profile Picture" draggable="false" decoding="async" src="/pfp.gif" className="flex rounded-full aspect-square object-cover"/>
            </a>
            <div className="flex flex-col justify-center">
                <h1 className="md:text-lg font-bold leading-5 text-text-primary">wil</h1>
                <h2 className="text-xs md:text-sm md:text-md leading-5 text-text-secondary">Java Developer</h2>
            </div>
        </div>
    )
}

export default Profile
