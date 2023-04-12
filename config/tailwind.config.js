// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: "class",
    content: [
        "./public/*.html",
        "./app/helpers/**/*.rb",
        "./app/javascript/**/*.js",
        "./app/components/**/*.{erb,haml,html,slim}",
        "./app/views/**/*.{erb,haml,html,slim}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#0BB981",
                primary: "#31274b",
                dark: "#1F2937",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
    ],
};
