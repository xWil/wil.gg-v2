import type {HeaderProps} from "./ProjectHeader.tsx";
import type {DetailProps} from "./DetailList.tsx";
import type {ProjectLinkProps} from "./ProjectLink.tsx";

export interface ProjectData {
    header: HeaderProps,
    description: string,
    details: DetailProps[],
    link: ProjectLinkProps | null,
    images: string[]
}

export const projects: ProjectData[] = [
    {
        header: {icon: "/projects/imposter/imposter-icon.svg", alt: "Imposter icon", name: "Imposter"},
        description: "Imposter is a web-based party game where one player is designated as the imposter, and everyone has to guess who!",
        details: [
            {category: "Language", details: "Java, JavaScript, HTML, CSS"},
            {category: "Frontend", details: "React, Tailwind"},
            {category: "Backend", details: "Spring / SpringBoot"}
        ],
        link: {link: "https://imposter.wil.gg/", text: "imposter.wil.gg"},
        images: ["/projects/imposter/imposter-lobby.png", "/projects/imposter/imposter-question.png", "/projects/imposter/imposter-answers.png", "/projects/imposter/imposter-leaderboard.png"]
    },
    {
        header: {icon: "/projects/vlrscraper/vlrscraper-icon.png", alt: "Project icon", name: "VLRScraper"},
        description: "VLRScraper is a web-scraper and statistics analysis tool for VCT match data, sourced from VLR.",
        details: [
            {category: "Language", details: "Java, JavaFX, CSS"},
            {category: "Database", details: "MySQL, SQLite"}
        ],
        link: null,
        images: ["/projects/vlrscraper/vlrscraper-player.png", "/projects/vlrscraper/vlrscraper-team.png", "/projects/vlrscraper/vlrscraper-leaderboard.png", "/projects/vlrscraper/vlrscraper-dashboard.png"]
    },
    {
        header: {icon: "/pfp.gif", alt: "Project icon", name: "SubwayCrafters"},
        description: "SubwayCrafters is a feature-rich, infinitly generating runner game, built on Spigot.",
        details: [
            {category: "Language", details: "Java"},
            {category: "Platform", details: "Spigot, Paper"},
            {category: "Database", details: "PostgreSQL, MySQL, SQLite"}
        ],
        link: null,
        images: ["/projects/imposter/imposter-lobby.png", "/projects/imposter/imposter-question.png", "/projects/imposter/imposter-answers.png", "/projects/imposter/imposter-leaderboard.png"]
    }
];