var gulp = require('gulp'),
	rename = require('gulp-rename'),
	less = require('gulp-less'),
	minifycss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function(){
	return gulp.src('assets/**/*.less')
		.pipe(less())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 2'))
		.pipe(minifycss())
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(gulp.dest('assets/'));
});