'use strict';

var lo = require('lodash'),
    merge = lo.merge;

function noop(){}



function make_method(base_defaults, f){
  function todo_name_me(overrides, cb){
    var opts;
    if (arguments.length === 1 && typeof overrides === 'function') {
      cb = overrides;
      opts = base_defaults;
    } else {
      opts = merge({}, base_defaults, overrides);
      cb = cb || noop;
    }

    return f.apply(null, [opts, cb]);
  }

  todo_name_me.defaults = function(base_defaults_method){
    if (arguments.length === 0) return base_defaults;
    return make_method(merge({}, base_defaults, base_defaults_method), f);
  };

  return todo_name_me;
}



module.exports = make_method;