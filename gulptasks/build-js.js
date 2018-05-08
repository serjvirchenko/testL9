var gulp         = require("gulp");
var concat       = require("gulp-concat");
var rename       = require("gulp-rename");
var uglify       = require("gulp-uglify");
var rev          = require("gulp-rev");
var stripDebug   = require("gulp-strip-debug");

gulp.task("build:js", function() {
    gulp.src([
        "./src/index.js",
        "!./bower_components/**/*",
        "./src/**/*.js"
    ])
        .pipe(concat("app.js"))
        .pipe(stripDebug())
        .pipe(rev())
        // .pipe(gulp.dest("./build/assets/js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./build/assets/js"));

});