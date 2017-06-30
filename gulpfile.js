// require for the packages in npm
var gulp=require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var uglify=require('gulp-uglify');
var utilities=require('gulp-util');
var del = require('del');
var browserSync = require('browser-sync').create();

var buildProduction = utilities.env.production;

// task to check for errors
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
// task to make js files readable in the browser
gulp.task('browserify',function(){
  return browserify({ entries: ['./js/script-interface.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
// task to minify the js files
gulp.task('uglify',['browserify'],function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});
gulp.task('clean',function(){
  return del(['build', 'tmp']);
});
// Change heading
gulp.task("build",['clean'], function(){
  if (buildProduction) {
    gulp.start('uglify');
  } else {
    gulp.start('browserify');
  }
});
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
  

});
gulp.task('jsBuild', ['browserify', 'jshint'], function(){
  browserSync.reload();
});
