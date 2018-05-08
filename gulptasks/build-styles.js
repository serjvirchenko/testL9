var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var CleanCSS = require('gulp-clean-css');
var rev = require('gulp-rev');

gulp.task('build:styles', function () {
    return gulp.src(['src/components/**/*.css'])
        .pipe(concat('styles.css'))
        .pipe(rev())
        .pipe(gulp.dest('./build/assets/css'))
        .pipe(CleanCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./build/assets/css'));
});