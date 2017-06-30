var gulp=require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('jshint2', function(){
  return gulp.src(['./js/script.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('browserify',['jshint'],function(){
  return browserify({ entries: ['./js/script-interface.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
})
