const del = require('del')

function clearVideo() {
  return del('./public/video')
}

module.exports = clearVideo;