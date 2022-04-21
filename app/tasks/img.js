const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')

function img() {

  return src('app/images/**/*.{png,jpeg,jpg,gif,svg}')
    // .pipe(newer('../../public/image'))
    // .pipe(imagemin({
    //   verbose: true,
    // }))

    .pipe(dest('./public/images'))
}

module.exports = img;
