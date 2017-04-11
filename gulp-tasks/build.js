(function () {
  'use strict';

  module.exports = function (gulp, plugins, config) {
    return function (done) {
      return plugins.runSequence('copy', ['styles', 'views'], 'sitemap', done);
    };
  };
})();
