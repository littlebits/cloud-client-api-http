var cust = require('./customizations');
var sa = require('superagent');



exports.calc_fname = route_calc_fname;
exports.path_interpolate = route_path_interpolate;
exports.functionify = route_functionify;



function route_functionify(route){
  return function(opts, cb){
    var uri = route_join(opts.host, route_path_interpolate(route, [opts.device_id]));

    // Instantiate a http request
    var r = sa(route.method, uri);
    if (route.auth && opts.access_token) r.set('Authorization', 'Bearer '+ opts.access_token);
    r.set('Accept', 'application/vnd.littlebits.v'+ opts.version +'+json');

    // Custom payload data can be provided by the user under the payload key
    if (opts.payload) r.set(opts.payload);

    // For each known valid endpoint payload/query param,
    // look for provided data in opts.
    var add_params = param_adder(route.path, route.method, r, opts);
    if (route.payloadParams.children) {
      route.payloadParams.children.forEach(add_params);
    }
    if (route.queryParams.children) {
      route.queryParams.children.forEach(add_params);
    }

    // Do the HTTP request
    r.end(function(err, response){
      if (err) return cb(err);
      if (response.error) return cb(extract_err(response));
      cb(null, response.body);
    });
  };
}



function route_path_interpolate(route, path_args){
  return path_args.reduce(function(path, arg){
    return path.replace(/{[^}]*}/, arg);
  }, route.path);
}



function route_calc_fname(route){
  var custom_name = cust.table[route.path] &&
                    cust.table[route.path][route.method.toLowerCase()] &&
                    cust.table[route.path][route.method.toLowerCase()].fname ;
  return custom_name ? custom_name : null ;
}



// Private

function param_adder(path, method, request, request_opts){
  return function(param){
    var value = cust.opt_to_pp(path, method, param.name, request_opts);
    if (value) {
      var o = {};
      o[param.name] = value;
      request[method === 'GET' ? 'query' : 'send'](o);
    }
  };
}



function route_join(){
  var path = [];
  for (var i = 0; i < arguments.length; i++) {
    path.push(arguments[i].replace(/^\//, '').replace(/\/$/, ''));
  }
  return path.join('/');
}



function extract_err(res){
  var err = res.error;
  if (res.body && res.body.message) err.message = res.body.message;
  return err;
}
