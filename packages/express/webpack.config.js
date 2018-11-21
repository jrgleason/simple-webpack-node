const path = require('path');
module.exports = () => {
    return require(path.resolve(__dirname, "webpack/webpack.dev.js"));
};