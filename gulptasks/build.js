var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(){
    runSequence('build:clean', 'build:js', 'build:html', 'build:bower:js', 'build:bower:css', 'build:bower:font', 'build:bower:images', 'build:styles', 'build:images', 'build:markup');
});
