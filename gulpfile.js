var gulp = require('gulp');

//plugins
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var js = [
    'public/js/core/app.module.js',
    'public/js/core/app.config.js',
    'public/js/services/*.js',
    'public/js/directives/*.js',
    'public/js/controllers/*.js'
];

gulp.task('js', function () {
    gulp.src(js)
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('public/js/'))

});

gulp.task('watch', function () {
    gulp.watch('public/js/**/*.js', ['js']);
});

gulp.task('default', ['js', 'watch']);