const path = require('path');
const WebpackBar = require('webpackbar');
module.exports = (arvg) => {
    return {
        webpack: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            plugins: [
                new WebpackBar(),
            ],
        },
    }
}