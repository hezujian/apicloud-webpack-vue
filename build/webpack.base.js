const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const webpack = require('webpack');
const HappyPack = require('happypack');
// 构造出共享进程池，进程池中包含5个子进程
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });

const {
  entry,
  pages
} = require('./util/entryHtmlPlugin')();

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../widget/html')
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['happypack/loader?id=babel'],
        // 只对项目根目录下的 src 目录中的文件采用 babel-loader
        // include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: false
        }
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['happypack/loader?id=css']
      },{
        test: /\.png$|\.jpg$|\.jpeg$|\.ico$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 30KB 以下的文件采用 url-loader
            limit: 1024 * 30,
            // 否则采用 file-loader，默认值就是 file-loader 
            fallback: 'file-loader',
          }
        }]
      }
    ],
    noParse: [/api\.min\.js$/],
  },
  plugins: [
    new HappyPack({
      // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'css',
      loaders: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ],
      threadPool: happyThreadPool,
    }),
    // 告诉 Webpack 使用了哪些动态链接库
    new DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      manifest: require('../widget/lib/vue.manifest.json'),
    }),
    new VueLoaderPlugin(),
  ].concat(pages),

  resolve: {
    // 尽可能的减少后缀尝试的可能性
    extensions: ['.js', '.vue'],
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
      '@': path.resolve(__dirname, `../src`),
      '$api': path.resolve(__dirname, `../widget/assets/js/api.js`)
    }
  },
}