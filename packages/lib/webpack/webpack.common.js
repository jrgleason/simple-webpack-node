const path = require('path');
const config = {
    entry:  "./src/index.js",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "../dist")
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    target: 'node'
};
module.exports = config;