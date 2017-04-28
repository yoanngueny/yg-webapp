const path = require('path');

module.exports = function(env) {
    return require('./webpack/'+env+'.js')({
        host: 'http://projects.dev/YOANN/yg-webapp/dist',
        app: path.resolve(__dirname, 'app'),
        dist: path.resolve(__dirname, 'dist')
    });
}
