const { src, dest } = require('gulp');

//плагины
const size = require('gulp-size') // Показывает размер файла
const fileInclude = require('gulp-file-include') // Шаблонизатор html
const htmlmin = require('gulp-htmlmin')// Сжимает файл HTML

function html() {
  return src('app/index.html')
    .pipe(fileInclude())
    .pipe(size({ title: "До сжатия HTML" }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(size({ title: "После сжатия HTML" }))
    .pipe(dest('./public'))
}

module.exports = html;
