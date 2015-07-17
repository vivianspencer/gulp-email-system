'use strict';

var gulp        = require('gulp-help')(require('gulp')),
    clean       = require('gulp-clean'),
    hb          = require('gulp-hb'),
    htmlhint    = require('gulp-htmlhint'),
    litmus      = require('gulp-litmus'),
    plumber     = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    special     = require('gulp-special-html'),
    gutil       = require('gulp-util'),
    runSequence = require('run-sequence');

/**
 * Build configuration file
 *
 * @type {*|exports|module.exports}
 */
var config = require('./build.config.js');


/**
 * Retrieves the data for a corresponding template
 *
 * @param context
 * @param file
 * @returns {*}
 */
function getTmplData(context, file) {
    var basename = new gutil.File(file).basename;
    var dataPath = file.cwd + '/src/data/' + basename.replace('.html', '.json');

    try {
        return require(dataPath);
    }
    catch (e) {
        return {};
    }
}


/**
 * Compiles our SCSS, moves it into our build directory
 * and auto-inject into browsers
 */
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("./build/css"));
});


/**
 * Cleans our /build folder before we start our build.
 */
gulp.task('clean', function() {
    return gulp.src('./build', {read: false})
        .pipe(clean());
});


/**
 * Check HTML code
 */
gulp.task('htmlhint', function() {
    return gulp.src(['./build/**/*.html'])
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
});


/**
 * Send HTML to litmus
 */
gulp.task('litmus', ['build'], function() {
    return gulp.src('./build/index.html')
        .pipe(litmus(config.litmus));
});


/**
 * Compile the handlebars templates
 */
gulp.task('build', ['clean'], function() {
    return gulp.src('./src/emails/*.html')
        .pipe(hb({
            dataEach: getTmplData,
            helpers: [
                './node_modules/handlebars-layouts/index.js',
                './src/helpers/*.js'
            ],
            partials: './src/partials/**/*.hbs'
        }))
        .pipe(special())
        .pipe(gulp.dest(config.buildDir));
});


/**
 * Setup our default task, when `gulp` is run.
 */
gulp.task('default', 'runs -> clean, build, htmlhint', function() {
    runSequence('clean', 'build', 'htmlhint');
});