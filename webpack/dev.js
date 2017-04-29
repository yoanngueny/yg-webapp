const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config) {
    return Merge(CommonConfig(config), {
        devServer: {
            proxy: {
                '/': config.host
            }
        },
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(false)
            }),
            // create styles css
            new ExtractTextPlugin('[name].css'),
            // force webserver to write files
            new WriteFilePlugin({
                log: false,
                test: /\.php$/
            })
        ]
    })
}
