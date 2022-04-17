const del = require('del')

function clearImg() {
  return del('./public/image')
}

module.exports = clearImg;