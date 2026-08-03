function DotBackground() {
    return (
        <div className="absolute -z-10 h-full w-full bg-background overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF11_1px,transparent_2px)] bg-size-[25px_25px] mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"/>
        </div>
    )
}

export default DotBackground;
