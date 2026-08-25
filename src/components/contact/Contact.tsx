import SectionTitle from "../common/SectionTitle.tsx";
import ContactField from "./ContactField.tsx";
import SendButton from "./SendButton.tsx";
import * as React from "react";
import {useState} from "react";

function Contact() {
    const [message, setMessage] = useState("");
    const [success, setSuccess]= useState(false);

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = (data.get("name") as string).trim();
        const email = (data.get("email") as string).trim();
        const message = (data.get("message") as string).trim();

        if (name.length === 0) {
            setSuccess(false);
            setMessage("Name field is required")
            return;
        } else if (email.length === 0) {
            setSuccess(false);
            setMessage("Email field is required")
            return;
        } else if (message.length === 0) {
            setSuccess(false);
            setMessage("Message field is required")
            return;
        }

        console.log({name, email, message});
        setSuccess(true);
        setMessage("Message sent!")
    };

    return (
        <section id="contact" className="min-h-screen pb-16 pt-32 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center">
            <div className="flex flex-col h-fit w-full max-w-[clamp(12rem,80vw,42rem)]">
                <SectionTitle title="Contact"/>
                <span className="text-text-secondary text-xl md:text-2xl mb-4 sm:mb-6">Let me know what you're thinking</span>

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
