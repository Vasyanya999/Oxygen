const { src, dest } = require('gulp');


function video() {
  return src('app/video/**/*.mp4')
    .pipe(dest('./public/video'))
}

module.exports = video;