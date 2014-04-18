'use strict';

var sa = require('superagent');
var lo = require('lodash'),
    merge = lo.merge;


// var api_uri = 'api-rest.littlebitscloud.cc';

function route(){
  return Array.prototype.slice.apply(arguments).join('/');
}



var root_defaults = {
  host: 'api-rest.littlebitscloud.cc',
  apiVersion: '1'
};



function api(base_defaults){
  var methods = {
    defaults: function defaults(new_defaults){
      if (arguments.length === 0) return base_defaults;
      return api(merge({}, base_defaults, new_defaults));
    },
    output: function output(overrides, cb){
      var opts = merge({}, base_defaults, overrides);
      var uri = route(opts.uri_root, 'cloudbits', opts.bit_id, 'output');
      sa('POST', uri)
      .end(cb);
    }
  };
  return methods;
}



module.exports = api(root_defaults);