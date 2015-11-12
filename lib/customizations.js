var F = require('./utils')



exports.opt_to_pp = opt_to_pp;



var table = exports.table = {
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
    },
    'put': {
      fname: 'device_update'
    }
  },
  '/devices/{device_id}/output': {
    post: {
      fname: 'output'
    }
  },
  '/devices/{device_id}/light': {
    post: {
      fname: 'light'
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
    }
  }
};



function opt_to_pp(path, method, pp_name, opts) {
    method = method.toLowerCase();
    var cust = (table[path] && table[path][method] && table[path][method][pp_name]) || {};
    var name_used = opts[cust.rename] ? cust.rename : pp_name;
    var value = opts[name_used]
    return F.isExist(value) ? (cust.trans ? cust.trans(value, name_used) : value) : null ;
}
