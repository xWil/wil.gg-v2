import SectionTitle from "../common/SectionTitle.tsx";
import ContactField from "./ContactField.tsx";
import SendButton from "./SendButton.tsx";
import * as React from "react";
import {useRef, useState} from "react";
import {observeVisible} from "../../ObserveVisibleHook.tsx";

function Contact() {
    const ref = useRef<HTMLSpanElement>(null);
    const isVisible: boolean = observeVisible(ref);

    const [message, setMessage] = useState("");
    const [success, setSuccess]= useState(false);

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);
        const name = (data.get("name") as string).trim();
        const email = (data.get("email") as string).trim();
        const content = (data.get("message") as string).trim();

        if (name.length === 0) {
            setSuccess(false);
            setMessage("Name field is required")
            return;
        } else if (email.length === 0) {
            setSuccess(false);
            setMessage("Email field is required")
            return;
        } else if (content.length === 0) {
            setSuccess(false);
            setMessage("Message field is required")
            return;
        }

        const params = new URLSearchParams({ name, email, content });

        let response: Response;
        let responseData: { reason?: string; message?: string } = {};
        try {
            response = await fetch(`https://wil.gg/api/message?${params}`, { method: "GET" });
            responseData = await response.json().catch(() => ({}));
        } catch {
            setSuccess(false);
            setMessage("Couldn't connect to API");
            return;
        }

        if (!response.ok) {
            setSuccess(false);

            switch (responseData.reason) {
                case "INVALID_FIELD":
                    const message = responseData.message as string;
                    const index = message.indexOf("'") + 1;
                    const fieldName = message.substring(index + 1, message.lastIndexOf("'"));
                    setMessage(message.charAt(index).toUpperCase() + fieldName + " is invalid.")
                    break;
                case "SEND_FAILED":
                    setMessage("Failed to send, please try again.")
            }
            return;
        }

        form.reset();
        setSuccess(true);
        setMessage("Message sent!")
    };

    return (
        <section id="contact" className="min-h-screen pb-16 pt-32 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center">
            <div className="flex flex-col h-fit w-full max-w-[clamp(12rem,80vw,42rem)]">
                <SectionTitle title="Contact"/>
                <span ref={ref} className={`text-text-secondary text-xl md:text-2xl mb-4 sm:mb-6 transition-transform duration-300 ${isVisible ?  "" : "-translate-x-10 opacity-0" }`}>Let me know what you're thinking</span>

                <form noValidate={true} onSubmit={handleSubmit} onChange={() => setMessage("")} className="flex flex-col gap-5">
                    <div className="flex max-sm:flex-col gap-5 w-full">
                        <ContactField name={"name"} prompt={"Name"} rows={1}/>
                        <ContactField name={"email"} prompt={"Email"} rows={1}/>
                    </div>
                    <ContactField name={"message"} prompt={"Message..."} rows={4}/>
                    <div className="mt-8 flex justify-center sm:justify-end">
                        <div className="relative flex flex-col items-center gap-2">
                            <SendButton/>
                            { message.length === 0 ? "" :
                                <span className={`absolute top-full mt-2 whitespace-nowrap ${success ? "text-[#55FF55]" : "text-text-favourite"} text-xs sm:text-sm`}>{message}</span> }
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
