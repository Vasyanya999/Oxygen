const { src, dest } = require('gulp');

//плагины
const newer = require('gulp-newer')
const fonter = require('gulp-fonter')
const ttf2woff2 = require('gulp-ttf2woff2')

function font() {
  return src('app/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}')
    // .pipe(newer('app/fonts'))
    .pipe(fonter({
      formats: ['ttf', 'woff']
    }))
    .pipe(dest('./public/fonts'))
    .pipe(ttf2woff2())
    .pipe(dest('./public/fonts'))
}

module.exports = font;
