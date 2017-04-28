const path = require('path');

module.exports = function(env) {
    return require('./webpack/'+env+'.js')({
        host: 'http://your-host',
        app: path.resolve(__dirname, 'app'),
        dist: path.resolve(__dirname, 'dist')
    });
}
