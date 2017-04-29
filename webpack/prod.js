const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function(config) {
    return Merge(CommonConfig(config), {
        output: {
            // override file name to prevent cache
            filename: '[name].[chunkhash].js',
        },
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(true)
            }),
            /*new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })*/
            // create chunks files manifest
            new ManifestPlugin(),
        ]
    })
}
