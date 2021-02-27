const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    important: true,
    theme: {
        fontFamily: {
            sans: ["Poppins"],
        },

        extend: {
            spacing: {
                "3/4": "75%",
                "9/16": "56.25%",
                full: "100%",
            },
            colors: {
                teal: colors.teal,
                violet: colors.violet,
                cyan: colors.cyan,
                amber: colors.amber,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
