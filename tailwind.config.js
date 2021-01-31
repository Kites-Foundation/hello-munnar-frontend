const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ["Quicksand"],
        },

        extend: {
            spacing: {
                "3/4": "75%",
            },
            colors: {
                teal: colors.teal,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
