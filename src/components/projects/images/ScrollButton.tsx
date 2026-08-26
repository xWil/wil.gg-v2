function ScrollButton({ onClick, left }: {onClick: () => void, left: boolean}) {
    return(
        <div onClick={onClick} className={`absolute ${left ? "-left-5" : "-right-5"} top-1/2 -translate-y-4 z-10 bg-background-light p-1 rounded-full border-2 border-background-light
        transition-all duration-300 hover:border-background-light-hover ${left ? "hover:-rotate-8" : "hover:rotate-8"}`}>
            <img src={"/icons/" + (left ? "left-arrow.svg" : "right-arrow.svg")} alt={left ? "Left arrow" : "Right arrow"} loading="lazy" decoding="async"
                 className={`size-4 aspect-square ${left ? "translate-x-[-0.1rem]" : "translate-x-[0.1rem]"}`}/>
        </div>
    )
}

export default ScrollButton;
