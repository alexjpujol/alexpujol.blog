const gulp = require('gulp'),
    log = require('fancy-log'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    minifyHTML = require('gulp-minify-html'),
    minifyJSON = require('gulp-jsonminify'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
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
htmlSources = ['builds/development/*.html']

gulp.task('log', function() {
    log("I like turtles!");
});

//minify html
gulp.task("js", function () {
    return gulp.src(javascripts)
        .pipe(concat("bundle.min.js"))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(`${outputDir}js`))
        .pipe(connect.reload());
});

//convert Sass to CSS in a single file
gulp.task('sass', function() {
    return gulp.src(scss)
        .pipe(sass({
            outputStyle: sassStyle
        }))
        .pipe(gulp.dest(`${outputDir}css`))
        .pipe(connect.reload());
});

//minify production html
gulp.task('html', function() {
    return gulp.src(htmlSources)
        .pipe(gulpif(env === 'production', minifyHTML()))
        .pipe(gulpif(env === 'production', gulp.dest(`${outputDir}`)))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('builds/development/images/**/*.*')
        .pipe(gulpif(env === 'production', imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false}],
            use: [pngcrush()]
        })))
        .pipe(gulpif(env === 'production', gulp.dest(outputDir + 'images')))
        .pipe(connect.reload());
})

gulp.task('json', function() {
    return gulp.src('builds/development/js/*.json')
        .pipe(gulpif(env === 'production', minifyJSON()))
        .pipe(gulpif(env === 'production', gulp.dest('builds/production/js')))
        .pipe(connect.reload());
});

//watch for changed files
gulp.task('watch', function() {
    gulp.watch(javascripts, ['js']);
    gulp.watch('components/sass/*.scss', ['sass']);
    gulp.watch('builds/development/*.html', ['html']);
    gulp.watch('builds/development/js/*.json', ['json']);
    gulp.watch('builds/development/images/**/*.*', ['images']);
});


gulp.task('connect', function() {
    connect.server({
        root: 'builds/development',
        livereload: true
    });
})

//run the jewels
gulp.task('default', ['sass', 'js', 'html', 'json', 'images', 'connect', 'watch']);