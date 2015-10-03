var gulp = require('gulp');
var shell = require('gulp-shell');
var tsc = require('gulp-typescript');
var typescript = require('typescript');

const SOURCES = 'patterns';
const TS_FILES = SOURCES + '/**/*.ts';

gulp.task('ts', function() {
	return gulp
		.src(TS_FILES)
		.pipe(tsc({
			target: 'ES5',
			module: 'commonjs',
			typescript: typescript
		}))
		.pipe(gulp.dest(SOURCES));
});

gulp.task('watch', function() {
	gulp.watch(TS_FILES, ['ts']);
});

gulp.task('default', ['ts', 'watch']);