const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(config) {
    return {
        context: path.resolve(config.root, 'app'),
        entry: {
            main: './index.js'
        },
        output: {
            path: path.resolve(config.root, 'dist'),
            filename: '[name].js',
        },
        //devtool: 'cheap-eval-source-map',
        plugins: [
            // clean export folder
            new CleanWebpackPlugin(['dist'], {
                root: config.root
            }),
            // create vendor bundle with all imported node_modules
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                   return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            // create webpack manifest separately
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest'
            }),
            // copy php files
            new CopyWebpackPlugin([
                { from: 'index.php' },
                { from: 'php/**/*' }
            ], {
                copyUnmodified: false
            })
        ]
    }
};
