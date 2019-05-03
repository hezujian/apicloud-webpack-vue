const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('../config/config');
const webpackMerge = require('webpack-merge');
const baseC = require('./webpack.base.js');

const conf = {
    mode:'production',
    plugins: [
        // 压缩输出的 JS 代码
        new UglifyJSPlugin({
            uglifyOptions: {
                output: {
                  comments: false,
                  beautify: false,
                },
                compress: {
                    // 在UglifyJs删除没有用到的代码时不输出警告
                    warnings: false,
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                },
                warnings: false
              }
        }),
    ],
}
module.exports = webpackMerge(baseC,conf);