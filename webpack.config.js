const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // entry: './src/index.js',
    entry: {
        // app: './src/index.js',
        // print: './src/print.js',
        app: './src/index.js'
    },
    // 追踪错误信息
    devtool: 'inline-source-map',
    devServer: {
        // 告诉开发服务器(dev server)，在哪里查找文件
        contentBase: './dist',//本地服务器所加载的页面所在的目录
        hot: true
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};