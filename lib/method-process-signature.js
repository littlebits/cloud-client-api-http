var snakeify = require('to-snake-case')
var transform = require('lodash.transform')
var merge = require('merge')
var default_cb = (console && console.log && console.log.bind(console)) || function noop(){};



module.exports = process_signature

function process_signature(args) {
  var args_ = {};

  if (typeof args[0] === 'function') {

    args_.overrides = {};
    args_.cb = args[0];

  } else if (typeof args[0] === 'string') {

    var overrides = typeof args[1] === 'object' ? args[1] : null
    args_.overrides = merge({device_id: args[0]}, normalize_key_case(overrides || {}));
    args_.cb = overrides
      ? (args[2] || default_cb)
      : (args[1] || default_cb)

  } else {

    args_.overrides = normalize_key_case(args[0] || {})
    args_.cb = args[1] || default_cb

  }

  return args_
}



function normalize_key_case(options) {
  return transform(options, do_snakeify, {})

  function do_snakeify(o, v, k) {
    o[snakeify(k)] = v
  }
}
