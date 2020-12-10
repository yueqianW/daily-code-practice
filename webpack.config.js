const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // entry: './src/index.tsx',
    entry: {
        // app: './src/index.tsx',
        // print: './src/print.js',
        app: './src/index.tsx',
        // html: './src/index.html',
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // 追踪错误信息
    devtool: 'inline-source-map',
    devServer: {
        // 告诉开发服务器(dev server)，在哪里查找文件
        contentBase: './dist',//本地服务器所加载的页面所在的目录
        compress: true,
        port: 3100,
        open: true,
        // hot: true,   // 不需要
        // inline: true,    // 不需要
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    // 'url-loader',
                ],
                // options: {
                //     limit: 8 * 1024,
                //     name: '[hash:10].[ext]',
                //     esModule: false
                // }
            }, {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },
            // {
            //     // 其他资源处理
            //     exclude: /\.(html|css|less|png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader',
            //     ],
            //     options: {
            //         name: '[hash:10].[ext]',
            //     }
            // }
        ]
    }
};