function SendButton() {
    return (
        <button className="relative overflow-hidden w-fit sm:min-w-60 bg-background-light border-background-light border-2 text-text-primary text-sm sm:text-[1rem] md:text-lg font-bold py-4 px-4 rounded-full
        transition-all duration-200 hover:border-background-light-hover active:border-text-secondary">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        Send Message
                        <img src="/icons/send.svg" alt="send" className="w-4 h-4 sm:w-5 sm:h-5 translate-y-0.5"/>
                    </span>
        </button>
    )
}

export default SendButton;
