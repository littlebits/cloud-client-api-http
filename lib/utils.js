
function isExist (value) {
  return typeof value !== 'undefined' && value !== null
}



module.exports = {
  isExist: isExist
}
