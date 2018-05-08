var gulp       = require('gulp');
var uglify       = require("gulp-uglify");
var htmlmin      = require('gulp-htmlmin');
var rev          = require("gulp-rev");
var rename       = require("gulp-rename");
var templateCache = require('gulp-angular-templatecache');

gulp.task('build:html', function() {
    gulp.src(["!./bower_components/**/*", "!./src/index.html", "./src/**/*.html"])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(templateCache('templates.js', {
            module: 'app'
        }))
        .pipe(rev())
        .pipe(gulp.dest('./build/assets/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('./build/assets/js'));
});
