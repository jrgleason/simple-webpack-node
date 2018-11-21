const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const config = {
    mode: "development",
    devtool: "inline-source-map"
};
module.exports =webpackMerge(common, config);