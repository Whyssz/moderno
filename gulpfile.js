let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin')

gulp.task('sass',  () =>  {
    return  gulp.src('app/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('style', () => {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
})
gulp.task('script', () => {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
})
gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('js', () => {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
})
gulp.task('watch', () => {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('js'))
})
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    })
})
gulp.task('default', gulp.parallel('style','script','sass','watch','browser-sync'))

