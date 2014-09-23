// Require gulp dependencies
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

// Set up webserver + livereload with connect
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

// Copy dependencies
gulp.task('copy', function () {
  gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(gulp.dest('./css'));
  gulp.src(['bower_components/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('./js/vendor'));
  gulp.src(['bower_components/bootstrap/dist/fonts/**'])
    .pipe(gulp.dest('./fonts'));
  gulp.src(['bower_components/jquery/jquery.min.js', 'bower_components/jquery/jquery.min.map'])
    .pipe(gulp.dest('./js/vendor'));
});

// Reload page after html pages
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

// Compile and minify Sass, then reload page
gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(sourcemaps.init())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

// Watch files for changes
gulp.task('watch', function() {
	gulp.watch(['./*.html'], ['html']);
  gulp.watch('./sass/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['connect', 'copy', 'watch'], function() {

});