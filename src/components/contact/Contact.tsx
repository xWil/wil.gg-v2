import SectionTitle from "../common/SectionTitle.tsx";
import ContactField from "../common/ContactField.tsx";
import SendButton from "../common/SendButton.tsx";
import * as React from "react";

function Contact() {
    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const message = data.get("message") as string;

        if (name.length === 0) {
            console.log("Name required");
            return;
        } else if (email.length === 0) {
            console.log("Email required");
            return;
        } else if (message.length === 0) {
            console.log("Message required");
            return;
        }
        console.log({name, email, message});
    };

    return (
        <section id="contact" className="min-h-screen pb-16 pt-32 px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col items-center justify-center">
            <div className="flex flex-col mx-8 md:mx-16 lg:mx-24 xl:mx-32 w-fit h-fit min-w-[50%]">
                <SectionTitle title="Contact"/>
                <form noValidate={true} onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex max-sm:flex-col gap-5 w-full">
                        <ContactField name={"name"} prompt={"Name"} rows={1}/>
                        <ContactField name={"email"} prompt={"Email"} rows={1}/>
                    </div>
                    <ContactField name={"message"} prompt={"Message..."} rows={4}/>
                    <SendButton/>
                </form>
            </div>
        </section>
    )
}

export default Contact;
