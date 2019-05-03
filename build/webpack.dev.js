const path = require('path');
const webpack = require('webpack');
const config = require('../config/config');
const webpackMerge = require('webpack-merge');
const baseC = require('./webpack.base.js');

const conf = {
    mode:'development',
    // 输出 source-map 方便直接调试 ES6 源码
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "../widget"),
        port: config.dev.port,
        host: config.dev.host
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
    ]
}
module.exports = webpackMerge(baseC,conf);