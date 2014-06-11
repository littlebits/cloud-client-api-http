exports.opt_to_pp = opt_to_pp;



var table = exports.table = {
  '/devices/{device_id}/output': {
    post: {
      fname: 'output'
    }
  },
  '/devices': {
    get: {
      fname: 'devices'
    }
  },
  '/devices/{device_id}': {
    get: {
      fname: 'device'
    },
    'delete': {
      fname: 'deactivate'
    },
    'post': {
      fname: 'activate'
    }
  },
  '/subscriptions': {
    post: {
      fname: 'subscribe'
    },
    'delete': {
      fname: 'unsubscribe'
    },
    get: {
      fname: 'subscriptions'
    },
  }
};



function opt_to_pp(path, method, pp_name, opts) {
    method = method.toLowerCase();
    var cust = (table[path] && table[path][method] && table[path][method][pp_name]) || {};
    var name_used = opts[cust.rename] ? cust.rename : pp_name ;
    return opts[name_used] ? (cust.trans ? cust.trans(opts[name_used], name_used) : opts[name_used]) : null ;
}



