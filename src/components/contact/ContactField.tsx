interface ContactFieldProps {
    name: string,
    prompt: string,
    rows: number;
}

function ContactField({ name, prompt, rows }: ContactFieldProps) {
    return (
        <div className="p-1 w-full h-fit border-b-2 border-text-prompt transition-all duration-300 hover:border-text-secondary focus-within:border-text-primary">
            <textarea name={name} placeholder={prompt} rows={rows}
                      className="w-full text-text-primary placeholder:text-text-prompt outline-none resize-none text-sm md:text-[1rem] scrollbar-none scroll-smooth"/>
        </div>
    )
}

export default ContactField;
