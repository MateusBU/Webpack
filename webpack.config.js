const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', //or production (create an minimalist code)
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public' 
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    module: {
        rules: [{
            test: /\.css$/, //read css files
            use: [
                MiniCssExtractPlugin.loader, //conflitande com o style-loader
                //'style-loader', //add CSS to DOM using tag <style> inside public/main.js
                'css-loader' //interpret @inport, url()...
            ]
        }]
    }
}