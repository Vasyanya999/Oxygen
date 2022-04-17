const { src, dest } = require('gulp');
const concat = require('gulp-concat'); // плзволяет соеденить несколько одинаковых файлов в один
const size = require('gulp-size') // Показывает размер файла
const uglify = require('gulp-uglify-es').default; // Сжимает файл JS

function scripts() {
  return src(['app/js/**/*.js'], { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(size({ title: "До сжатия JS" }))
    .pipe(uglify())
    .pipe(size({ title: "После сжатия JS" }))
    .pipe(dest('./public', { sourcemaps: true }))
}

module.exports = scripts;