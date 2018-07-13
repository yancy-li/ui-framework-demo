const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            exclude: ['libs', 'imgs'],
        }),
        new HtmlWebpackPlugin({
            title: 'Framework',
            template: 'index.ejs'
        })
    ],
    resolve: {
        modules: ["src", "node_modules"]
    }
};