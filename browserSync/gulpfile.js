/*
 * npm install browser-sync gulp --save-dev // install
 * gulp serve // launch
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./layout/css/styles.css").on("change", browserSync.reload );
    gulp.watch("./layout/js/jquery.js").on("change", browserSync.reload );
    gulp.watch("*.html").on("change", browserSync.reload );
});
