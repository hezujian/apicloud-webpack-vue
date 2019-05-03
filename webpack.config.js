var config = require('./build/webpack.dev.js');
if(process.env.NODE_ENV==='production'){
    config = require('./build/webpack.pro.js');
}
module.exports = config;