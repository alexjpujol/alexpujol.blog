const gulp = require('gulp'),
    log = require('fancy-log'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if')
    uglify = require('gulp-uglify-es').default;

let env,
    javascripts,
    scss,
    sassStyle,
    outputDir;

env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    outputDir = 'builds/development/';
    sassStyle = 'expanded'
} else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed'
}

javascripts = ['components/scripts/*.js'];
scss = ['components/sass/style.scss'];

gulp.task('log', function() {
    log("I like turtles!");
});

gulp.task("js", function () {
    return gulp.src(javascripts)
        .pipe(concat("bundle.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest(`${outputDir}js`));
});

//convert Sass to CSS in a single file
gulp.task('sass', function() {
    return gulp.src(scss)
        .pipe(sass({
            outputStyle: sassStyle
        }))
        .pipe(gulp.dest(`${outputDir}css`))
});

//watch for changed files
gulp.task('watch', function() {
    gulp.watch(javascripts, ['js']);
    gulp.watch('components/sass/*.scss', ['sass']);
});

// gulp.task('connect', function() {
//     connect.server({
//         root: 'builds/development',
//         livereload: true
//     })
// })

//run the jewels
gulp.task('default', ['sass', 'js', 'watch']);