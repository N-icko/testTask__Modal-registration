const gulp = require('gulp'); //Add gulp

gulp.task('hello', function (callback) {
	console.log('Its work!');
	callback();
});