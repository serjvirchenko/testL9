var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('build:images', function() {
    return gulp.src('./src/assets/images/**/*')
        .pipe(gulp.dest('./build/assets/images'));
});