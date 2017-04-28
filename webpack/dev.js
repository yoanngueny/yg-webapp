const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');
const WriteFilePlugin = require('write-file-webpack-plugin');

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
            // force webserver to write files
            new WriteFilePlugin({
                log: false,
                test: /\.php$/
            })
        ]
    })
}
