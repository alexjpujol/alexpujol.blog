const gulp = require('gulp'),
    log = require('fancy-log'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');


const javascripts = ['components/scripts/*.js'];
const scss = ['components/sass/style.scss'];

gulp.task('log', function() {
    log("I like turtles!");
});

gulp.task('js', function() {
    gulp.src(javascripts)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('sass', function() {
    gulp.src(scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('builds/development/css'))
})