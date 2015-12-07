var _ = require('lodash'),
	gulp = require('gulp'),
	runSequence = require('run-sequence'),
	defaultAssets = require('./config/assets/default'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	plugins = gulpLoadPlugins();

// Set NODE_ENV to 'test'
gulp.task('env:test', function () {
	process.env.NODE_ENV = 'test';
});

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
	process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
	process.env.NODE_ENV = 'production';
});


// JS minifying task
gulp.task('uglify', function () {
	var assets = _.union(
		defaultAssets.client.js,
		defaultAssets.client.templates
		);

	return gulp.src(assets)
		//.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify({
			mangle: false
		}))
		.pipe(plugins.concat('application.min.js'))
		.pipe(gulp.dest('public/dist'));
});

// CSS minifying task
gulp.task('cssmin', function () {
	return gulp.src(defaultAssets.client.css)
		.pipe(plugins.cssmin())
		.pipe(plugins.concat('application.min.css'))
		.pipe(gulp.dest('public/dist'));
});

// Lint project files and minify them into two production files.
gulp.task('build', function (done) {
	runSequence('env:dev', ['uglify', 'cssmin'], done);
});


// Run the project tests
gulp.task('test', function (done) {
	runSequence('env:test', done);
});

gulp.task('default', function (done) {
	runSequence('env:dev', done);
});

// Run the project in production mode
gulp.task('prod', function (done) {
	runSequence('build', 'env:prod', done);
});
