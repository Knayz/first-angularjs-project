'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso');

var NM = './node_modules/';

gulp.task('js', function() {
  gulp.src('builds/development/app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('builds/dist/app/'));
});

gulp.task('html', function() {
  gulp.src('builds/development/**/*.html')
    .pipe(gulp.dest('builds/dist/'));
});

gulp.task('sass', function () {
  gulp.src('builds/development/sass/**/*')
      .pipe(sass())
      .pipe(concat('style.min.css'))
      .pipe(csso())
      .pipe(gulp.dest('builds/dist/css/'));
});

gulp.task('img', function() {
  gulp.src('builds/development/img/**/*')
    .pipe(gulp.dest('builds/dist/img/'));
});

gulp.task('watch', function() {
  gulp.watch('builds/development/app/**/*.js', ['js']);
  gulp.watch('builds/development/sass/**/*.scss', ['sass']);
  gulp.watch('builds/development/**/*.html', ['html']);
  gulp.watch('builds/development/img/**/*', ['img']);
});

gulp.task('libs', function() {
  gulp.src(NM+'jquery/dist/jquery.js')
      .pipe(gulp.dest('./builds/dist/libs/jquery/'));

  gulp.src(NM+'bootstrap/dist/**/*.*')
      .pipe(gulp.dest('./builds/dist/libs/bootstrap/'));

  gulp.src(NM+'bootstrap-material-design/dist/**/*.*')
      .pipe(gulp.dest('./builds/dist/libs/bootstrap-material-design/'));

  gulp.src([NM+'angular/angular.js',
            NM+'angular-animate/angular-animate.js',
            NM+'angular-cookies/angular-cookies.js',
            NM+'angular-i18n/angular-locale_ru-ru.js',
            NM+'angular-loader/angular-loader.js',
            NM+'angular-resource/angular-resource.js',
            NM+'angular-route/angular-route.js',
            NM+'angular-sanitize/angular-sanitize.js',
            NM+'angular-touch/angular-touch.js',
            NM+'firebase/lib/firebase-web.js',
            NM+'angularfire/dist/angularfire.js',
          ])
      .pipe(concat('angular.concat.js'))
      .pipe(gulp.dest('./builds/dist/libs/angular/'));
});

gulp.task('webserver', function() {
  gulp.src('builds/dist/')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});

gulp.task('default', [
  'libs',
  'html',
  'img',
  'js',
  'sass',
  'webserver',
  'watch'
]);
