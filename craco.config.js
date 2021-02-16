const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    style: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    webpack: {
        plugins: [
            new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true,
                maximumFileSizeToCacheInBytes: 7340032
            })
        ]
    }
};
