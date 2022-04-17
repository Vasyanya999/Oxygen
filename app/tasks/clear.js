const del = require('del')

function clear() {
  return del('./public/')
}

module.exports = clear;