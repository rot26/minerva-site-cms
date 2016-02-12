var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
var path = require('path');
var $ = require('gulp-load-plugins')();
var sass = require('gulp-sass');

var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js')[environment];
var dir = 'public/';

var paths = {
	'server': ['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	'client': ['./public/**/*.js', '!./public/js/bundle.js', '!./public/js/app/helpers/**', '!./public/js/app/vendor/**'],
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}
};

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglifyjs() : $.util.noop())
    .pipe(gulp.dest(dir + 'js/'))
    .pipe($.size({ title : 'js' }))
});

gulp.task('runKeystone', shell.task('node keystone.js'));


gulp.task('default', ['runKeystone']);
