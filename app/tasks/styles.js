const { src, dest } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  return src('app/scss/main.scss', { sourcemaps: true })
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
      gride: true,
    }))
    .pipe(dest('./public', { sourcemaps: true }))
}

module.exports = styles;