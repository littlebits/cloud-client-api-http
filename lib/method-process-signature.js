'use strict';

var lo = require('lodash'),
    merge = lo.merge,
    bind = lo.bind;
var default_cb = (console && console.log && bind(console.log, console)) || function noop(){};



function process_signature(args){
  var args_ = {};
  if (typeof args[0] === 'function') {
    args_.overrides = {};
    args_.cb = args[0];
  } else if (typeof args[0] === 'string') {
    var overrides = typeof args[1] === 'object' ? args[1] : null ;
    args_.overrides = merge({bit_id: args[0]}, overrides);
    args_.cb = overrides ?
      (args[2] || default_cb) :
      (args[1] || default_cb) ;
  } else {
    args_.overrides = args[0] || {} ;
    args_.cb = args[1] || default_cb;
  }
  return args_;
}



module.exports = process_signature;