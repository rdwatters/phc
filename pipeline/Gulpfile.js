var gulp = require('gulp');

// Include Plugins
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');

// Compile Sass; note sass options to prevent server from breaking when you fudge a css rule
gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
      errToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('presentation.min.css'))
    .pipe(gulp.dest('../static/css/'))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('js/scripts/*.js')
    .pipe(concat('added.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename('added.min.js'))
    .pipe(gulp.dest('../static/js'));
});

//the default "compile" task for sass and js
gulp.task('compile', ['sass', 'scripts'], function() {
  gulp.watch(['scss/*.scss', 'scss/partials/*scss'], ['sass']);
  gulp.watch("scss/partials/*.scss", ['sass']);
  gulp.watch("js/scripts/*.js", ['scripts']);
  // gulp.watch("../content/**/*.md", ['markdown']);
});

// Default Task
gulp.task('default', ['compile']);
