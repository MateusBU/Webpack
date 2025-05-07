const webpack = require('webpack');

module.exports = {
    mode: 'development', //or production (create an minimalist code)
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public' 
    },
    module: {
        rules: [{
            test: /\.css$/, //read css files
            use: [
                'style-loader', //add CSS to DOM using tag <style> inside public/main.js
                'css-loader' //interpret @inport, url()...
            ]
        }]
    }
}