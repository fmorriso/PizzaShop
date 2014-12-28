/**
 * Created by Fred on 12/27/2014.
 */
var gulp = require("gulp");
var jshint = require('gulp-jshint');

gulp.task("default", function(){
    //console.log('hello Gulp');
    return gulp.src('./public/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});