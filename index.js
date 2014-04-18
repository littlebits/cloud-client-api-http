'use strict';

var sa = require('superagent');
var make_method = require('./lib/make-method');
var lo = require('lodash'),
    merge = lo.merge;

function route(){
  return Array.prototype.slice.apply(arguments).join('/');
}


function api(base_defaults){
  var methods = {
    defaults: function defaults(new_defaults){
      if (arguments.length === 0) return base_defaults;
      return api(merge({}, base_defaults, new_defaults));
    }
  };

  methods.output = make_method(base_defaults, function output(opts, cb){
    var uri = route(opts.host, 'cloudbits', opts.bit_id, 'output');

    return sa('POST', uri)
      .set('Authorization', 'Bearer '+ opts.accessToken)
      .set('Accept', 'application/vnd.littlebits.v'+ opts.version +'+json')
      .send({ duration_ms: opts.ms || 3000 })
      .send({ amount: ((opts.percent && opts.percent + '%') || opts.amount || '100%') })
      .end(function(err, res){
        cb(err, res.body);
      });
  });

  return methods;
}



var root_defaults = {
  host: 'https://api-rest.littlebitscloud.cc',
  apiVersion: '1'
};



module.exports = api(root_defaults);