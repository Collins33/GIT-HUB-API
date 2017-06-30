var gulp=require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var uglify=require('gulp-uglify');


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

gulp.task('browserify',function(){
  return browserify({ entries: ['./js/script-interface.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
gulp.task('uglify',['browserify'],function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
})
