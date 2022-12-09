const gulp = require('gulp');
const argv = require('yargs').argv;
const projectConfig = require('./projectConfig.json');
const path = projectConfig.path;
const browserSync = require('browser-sync').create();

/**
 * Dev check
 */
const isDev = function(){
    return !argv.prod;
}

/**
 * Prod check
 */
const isProd = function(){
    return !!argv.prod;
}


function browsersync() {
    browserSync.init({
            open: true,
            server: path.dist.distPath
    });
}
exports.default = browsersync;























// function testTask(done){
//     console.log('my test message');
//     done();
// }

// function testTaskSecond(done){
//     console.log('my test message 222');
//     done();
// }

// exports.test = testTask;
// exports.testSecond = testTaskSecond;