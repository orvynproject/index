var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var paths = {
	scss: './sass/*.scss'
};
gulp.task('sass', function(){
	gulp.src('scss/app.scss')
		.pipe(sass({
			includePaths: ['scss']
		}))
		.pipe(gulp.dest('assets/css'));
});
gulp.task('browser-sync', function() {
	browserSync.init(["assets/css/*.css", "assets/js/*.js"], {
		server: {
			baseDir: "./"
		}
	});
});
gulp.task('watch', ['sass', 'browser-sync'], function () {
	gulp.watch(["scss/*.scss", "scss/base/*.scss", "scss/section/*.scss", "scss/style/*.scss"], ['sass']);
});