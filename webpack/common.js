const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
    return {
        context: config.app,
        entry: './index.js',
        output: {
            path: config.dist,
            filename: 'bundle.js'
        },
        //devtool: 'cheap-eval-source-map',
        plugins: [
            new CopyWebpackPlugin([
                { from: 'index.php' },
                { from: 'php/**/*' }
            ], {
                copyUnmodified: false
            })
        ]
    }
};
