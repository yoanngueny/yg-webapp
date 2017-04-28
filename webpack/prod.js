const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');

module.exports = function(config) {
    return Merge(CommonConfig(config), {
        plugins: [
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(true)
            })/*,
            new webpack.optimize.UglifyJsPlugin({
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
        ]
    })
}
