const path = require('path');
const MODE = process.env.NODE_ENV;

module.exports = {
    mode: MODE,
    entry: './src/js/index.js',

    output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js',
    },

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