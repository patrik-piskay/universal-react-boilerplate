var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        __dirname + '/src/client/index.js'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },

    resolve: {
        extensions: ['', '.js'],
        alias: {
            src: __dirname + '/src',
            containers: __dirname + '/src/common/containers',
            components: __dirname + '/src/common/components'
        }
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: [
                path.join(__dirname, 'src', 'client'),
                path.join(__dirname, 'src', 'common')
            ]
        }]
    }
};