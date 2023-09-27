const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
module.exports = {
    stats: 'errors-only',
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: "Webpack Output",
        // }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),
    ],
    entry: {
        maincss: path.resolve(__dirname, './src/indexcssfiles.js'),
        mainjs: path.resolve(__dirname, './src/indexjsfiles.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
          { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
};