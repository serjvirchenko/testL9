var gulp = require('gulp');
var bowerMain = require('main-bower-files');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var CleanCSS = require('gulp-clean-css');
var flatten = require('gulp-flatten');
var using = require('gulp-using');

var jsFilter = ['*.js', '**/*.js'];
var cssFilter = ['**/*.css', '**/*.standalone.css'];
var fontFilter = ['**/*.eot', '**/*.woff', '**/*.svg', '**/*.ttf'];
var imageFilter = ['**/*.gif', '**/*.png', '**/*.svg', '**/*.jpg', '**/*.jpeg'];

gulp.task('build:bower:js', function () {
    return gulp.src(bowerMain(jsFilter))
        .pipe(using())
        .pipe(concat('lib.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./build/assets/js'));
});
gulp.task('build:bower:css', function () {
    return gulp.src(bowerMain(cssFilter, {
        overrides: {
            bootstrap: {
                main: [
                    './dist/js/bootstrap.js',
                    './dist/css/*.min.*',
                    './dist/fonts/*.*'
                ]
            }
        }
    }))
        .pipe(concat('lib.css'))
        .pipe(gulp.dest('./build/assets/css'))
        .pipe(CleanCSS())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./build/assets/css'));
});
gulp.task('build:bower:font', function () {
    return gulp.src(bowerMain(fontFilter))
        .pipe(flatten())
        .pipe(gulp.dest('./build/assets/fonts'));

});
gulp.task('build:bower:images', function () {
    return gulp.src(bowerMain(imageFilter))
        .pipe(flatten())
        .pipe(gulp.dest('./build/assets/images'));
});
