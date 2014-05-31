var merge =  require('lodash').merge;
var make_method = require('./make-method');
var routes = require('./routes');
var rutils = require('./route-utils');

var root_defaults = {
  host: 'https://api-http.littlebitscloud.cc',
  version: '2'
};



module.exports = API(root_defaults);

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



// Private

module.exports._process_signature = require('./method-process-signature');