/*
 * src folder : exports
 * dest folder : exports_opti
 * npm install gulp --save-dev gulp-rename gulp-watch gulp-imagemin
 * gulp
 */


var gulp = require('gulp');
var rename = require('gulp-rename');
var Imagemin = require('gulp-imagemin');


var source_img = 'exports/**';
var prod_img = 'exports_opti';

// Tâche "img" = Images optimisées
gulp.task('imgs', function () {
  return gulp.src(source_img + '/*.{png,jpg,jpeg,gif,svg}')
    .pipe(Imagemin())
    .pipe(gulp.dest(prod_img + '/'));
});


gulp.task('default', ['imgs']);


gulp.task('watch', function () {
  gulp.watch(source_img + '/**/*.{png,jpg,jpeg,gif,svg}', ['imgs']);
});
