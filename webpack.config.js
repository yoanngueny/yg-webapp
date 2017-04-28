var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //devtool: 'cheap-eval-source-map',
    devServer: {
        proxy: {
            '/': 'http://projects.dev/YOANN/yg-webapp/dist'
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.php' },
            { from: 'php/**/*' }
        ], {
            copyUnmodified: false
        }),
        new WriteFilePlugin({
            log: false,
            test: /\.php$/
        })
    ]
};
