import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "text-primary": "#e6e6e6",
                "text-secondary": "#b3b3b3",
                "text-prompt": "#b3b3b3AA",
                "text-favourite": "#FF5555",
                "background": "#0c0c0c",
                "background-light": "#1a1a1a",
                "background-light-hover": "#262626",
            },
            fontFamily: {
                "display": ["Mono", "sans-serif"]
            },
        },
    },
    plugins: [],
} satisfies Config