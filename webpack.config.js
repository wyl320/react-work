var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // 可对应多个入口文件
        app: ['./src/js/index.js'],
        'app-linkage': ['./src/js/test/selected-linkage/app.js']

    },
    devtool: 'source-map', // 输出source-map
    output:{
        path:path.resolve(__dirname, './build/'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './',
        inline: true, // 项目文件保存自动编译文件模块
        port: 8080
    }, 
    module: {
      loaders: [
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.jsx?$/, loader: 'babel-loader', query: {presets: ['es2015', 'react', 'stage-1']}}
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aaaa',
            template: 'index.html'
            
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};