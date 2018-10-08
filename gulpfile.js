var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('css', function(){
  return gulp.src('css/*')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});


gulp.task('default', [ 'css']);