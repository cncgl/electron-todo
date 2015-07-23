var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build', function() {
    return gulp.src('src/**/*.{js,jsx}')
        .pipe($.babel({
            stage: 0
        }))
        .pipe(gulp.dest('build'));
})