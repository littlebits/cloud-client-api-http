'use strict';

var table = {
  '/cloudbits/{bit_id}/output': {
    post: {
      fname: 'output',
      amount: {
        rename: 'percent',
        trans: function(value, key_used){
          if (key_used === 'percent') return value + '%';
          return value;
        }
      },
      duration_ms: {
        rename: 'ms'
      }
    }
  }
};

function opt_to_pp(path, method, pp_name, opts) {
    method = method.toLowerCase();
    var cust = table[path] && table[path][method] && table[path][method][pp_name];
    var name_used = opts[cust.rename] ? cust.rename : pp_name ;
    return opts[name_used] ? (cust.trans ? cust.trans(opts[name_used], name_used) : opts[name_used]) : null ;
}



exports.opt_to_pp = opt_to_pp;
exports.table = table;