var gulp = require('gulp');
var tsc = require('gulp-typescript');

const SOURCES = 'patterns';
const TS_FILES = SOURCES + '/**/*.ts';

gulp.task('ts', function() {
	return gulp
		.src(TS_FILES)
		.pipe(tsc({
			target: 'ES5',
			module: 'commonjs'
		}))
		.pipe(gulp.dest(SOURCES));
});

gulp.task('watch', function() {
	gulp.watch(TS_FILES, ['ts']);
});

gulp.task('default', ['ts', 'watch']);
