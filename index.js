'use strict';

var merge =  require('lodash').merge;
var make_method = require('./lib/make-method');
var routes = require('./assets/routes');
var rutils = require('./lib/route-utils');



function API(base_defaults){

  var api = routes.reduce(function(acc, route){
    var name = rutils.calc_fname(route);
    if (name) {
      acc[name] = make_method(base_defaults, rutils.functionify(route)) ;
    }
    return acc;
  }, {});

  api.defaults = function defaults(new_defaults){
    if (arguments.length === 0) return base_defaults;
    return API(merge({}, base_defaults, new_defaults));
  };

  return api;
}



var root_defaults = {
  host: 'https://api-rest.littlebitscloud.cc',
  version: '1'
};



module.exports = API(root_defaults);