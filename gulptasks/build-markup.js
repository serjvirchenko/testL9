var gulp = require("gulp");
var inject = require("gulp-inject");
var jeditor = require("gulp-json-editor");

gulp.task("build:markup", function () {
    var jsSources = gulp.src(["./build/assets/js/lib.min.js", "./build/assets/js/app-*.min.js", "./build/assets/js/templates-*.min.js"]);
    var cssSources = gulp.src(["./build/assets/css/lib.min.css", "./build/assets/css/styles-*.min.css"]);

    gulp.src("src/index.html")
        .pipe(inject(jsSources, {
            transform: function (filePath) {
                var newPath = filePath.replace("/build/", "");
                console.log("inject script = " + newPath);
                return "<script src='./" + newPath + "'></script>";
            }
        }))
        .pipe(inject(cssSources, {
            transform: function (filePath) {
                var newPath = filePath.replace("/build/", "");
                console.log("inject script = " + newPath);
                return "<link rel='stylesheet' href='./" + newPath + "'>";
            }
        }))
        .pipe(gulp.dest("./build"));
});