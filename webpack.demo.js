module.exports = function(env) {
    return require('./webpack/'+env+'.js')({
        host: 'http://your-host',
        root: __dirname
    });
};
