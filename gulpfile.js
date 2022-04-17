// Запуск в режиме разработки gulp dev
// Собрать проект gulp build
// Изменения в папке fonts неотслеживаются, поэтому после добавления туда шрифтов необходимо перезапустить режим разработки



const { parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();

// Задачи 
const html = require('./app/tasks/html')
const styles = require('./app/tasks/styles')
const scripts = require('./app/tasks/scripts')
const font = require('./app/tasks/font')
const img = require('./app/tasks/img')
const clearImg = require('./app/tasks/clearImg')
const clear = require('./app/tasks/clear')

function server() {
  browserSync.init({
    server: { baseDir: './public' },
    notify: false,
  })
  //notify: false, - всплывающая подсказка
  //online:false, - если нету интернета
}

function startWatch() {
  watch(['app/js/**/*.js', '!app/tasks/**/*.js'], scripts)
    .on("all", browserSync.reload)

  watch('app/**/*.html', html)
    .on("all", browserSync.reload)

  watch('app/scss/**/*.scss', styles)
    .on("all", browserSync.reload)

  watch('app/image/**/*.*', series(clearImg, img))
    .on("all", browserSync.reload)
}

const build = series(
  clear,
  parallel(html, styles, scripts, font, img)
)

const dev = series(
  clear,
  parallel(html, styles, scripts, img, font),
  parallel(startWatch, server)
)


exports.scripts = scripts;
exports.styles = styles;
exports.html = html;
exports.font = font;
exports.img = img;
exports.clearImg = clearImg;
exports.clear = clear;

exports.server = server;
exports.startWatch = startWatch;


exports.dev = dev;
exports.build = build;