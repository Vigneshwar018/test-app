let gulp = require('gulp'),
ftp = require('vinyl-ftp'),
gutil = require ('gulp-util');

function ftpDeploy() {

  var conn = ftp.create( {
    host: '127.0.0.1',
    port: 1024,
    parallel: 10,
    log: gutil.log
  });

  var globs = ['src/**',
    'backend/**',
    'public/**'];
  let path = '/data/data/com.termux/files/home/test-app';

  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance

  return gulp.src(globs, {
    base: '.', buffer: false
  })
  .pipe(conn.newerOrDifferentSize(path)) // only upload newer files
  .pipe(conn.dest(path));

};
// watch
function Watch(done) {
  'use strict';
  gulp.watch(['src/**', 'backend/**', 'public/**'], ftpDeploy);
  //gulp.watch('src/**').on('change', ftpDeploy);

};
gulp.task('default', gulp.parallel(Watch, ftpDeploy));