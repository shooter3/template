/* gulpfile.js */
'use strict'

let gulp = require('gulp')

let autoprefixer = require('gulp-autoprefixer')
let cssnano = require('gulp-cssnano')
let sass = require('gulp-sass')

gulp.task('css', () =>
{
    let stream = gulp.src('styles/interface.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(cssnano({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest('static'))

    return stream
})

gulp.task('watch:css', ['css'], () =>
{
    gulp.watch('styles/**/*.scss', ['css'])
})
