const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = process.env.NODE_ENV;
const enabledSourceMap = MODE === "development";

module.exports = {
    mode: MODE,
    entry: './src/js/index.js',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        },

    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: './html/index.html'
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        watchContentBase: true,
        port: 3000,
        inline: true,
        hot: true,
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js'],
    },
};