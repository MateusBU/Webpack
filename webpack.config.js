const modeDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const terserPlugin = require('terser-webpack-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: modeDev ? 'development' : 'production', //or production (create an minimalist code)
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public' 
    },
    devServer: {
        static: {
            directory: __dirname + '/public',
        },
        port: 9000,
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    optimization:{
        minimizer:[
            new cssMinimizerPlugin({
                parallel: true
            }),
            new terserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }),
        ]
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //read css files  .sass or .css or .scss
            use: [
                MiniCssExtractPlugin.loader, //conflitande com o style-loader
                //'style-loader', //add CSS to DOM using tag <style> inside public/main.js
                'css-loader', //interpret @import, url()...
                'sass-loader',
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource'
        }]
    }
}