(function () {
  'use strict';

  module.exports = function (gulp, plugins, config) {
    return function () {
      var parent = '';

      gulp.src([config.srcPath + '/**/media/**/*'], { base: config.srcPath })
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
