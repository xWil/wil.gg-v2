import {useRef} from "react";
import {observeVisible} from "../../ObserveVisibleHook.tsx";

function SendButton() {
    const ref = useRef<HTMLButtonElement>(null);
    const isVisible: boolean = observeVisible(ref);

    return (
        <button ref={ref} className={`relative overflow-hidden w-fit sm:min-w-60 bg-background-light border-background-light border-2 text-text-primary text-sm sm:text-[1rem] md:text-lg font-bold py-4 px-4 rounded-full
        transition-all duration-300 hover:border-background-light-hover active:border-text-secondary ${isVisible ?  "" : "translate-y-10 opacity-0" }`}>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        Send Message
                        <img src="/icons/send.svg" alt="send" className="w-4 h-4 sm:w-5 sm:h-5 translate-y-0.5"/>
                    </span>
        </button>
    )
}

export default SendButton;
