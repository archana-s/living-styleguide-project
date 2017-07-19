const gulp = require('gulp')

gulp.task('build:styleguide', function () {
  //TODO: Use PostCSS to generate a style guide
})

gulp.task('default', function() {
 gulp.watch('./styles/*.css', ['build:styleguide']);
})
