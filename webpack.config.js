const webpack = require('webpack');

module.exports = {
    mode: 'development', //or production (create an minimalist code)
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public' 
    }
}