import Project from "./Project.tsx";

function Projects() {
    return (
        <section id="projects" className="h-fit w-full">
            <Project header={{ icon: "/pfp.gif", alt: "Project icon", name: "Imposter" }}
                     description="Imposter is a web-based party game where one player is designated as the imposter, and everyone has to guess who!"
                     details={[
                         {category: "Language", details: "Java, JavaScript, HTML & CSS"},
                         {category: "Frontend", details: "React, Tailwind"},
                         {category: "Backend", details: "Spring / SpringBoot"}
                     ]} link={{ link: "https://imposter.wil.gg/", text: "imposter.wil.gg" }}
            />
            <Project header={{ icon: "/pfp.gif", alt: "Project icon", name: "VLRScraper" }}
                     description="VLRScraper is a web-scraper and statistics analysis tool for VCT match data, sourced from VLR."
                     details={[
                         {category: "Language", details: "Java, JavaFX, CSS"},
                         {category: "Database", details: "MySQL, SQLite"}
                     ]} link={{ link: "https://https://github.com/xWil", text: "github" }}
            />
            <Project header={{ icon: "/pfp.gif", alt: "Project icon", name: "SubwayCrafters" }}
                     description="VLRScraper is a web-scraper and statistics analysis tool for VCT match data, sourced from VLR."
                     details={[
                         {category: "Language", details: "Java"},
                         {category: "Platform", details: "Spigot, Paper"},
                         {category: "Database", details: "PostgreSQL, MySQL, SQLite"}
                     ]} link={{ link: "https://https://github.com/xWil", text: "github" }}
            />
        </section>
    )
}

export default Projects;
