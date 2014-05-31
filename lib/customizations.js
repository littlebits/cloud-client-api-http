


exports.opt_to_pp = opt_to_pp;



var table = exports.table = {
  '/devices/{device_id}/output': {
    post: {
      fname: 'output',
      duration_ms: {
        rename: 'durationMs'
      }
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
    }
  },
  '/subscriptions': {
    post: {
      fname: 'subscribe',
      subscriber_id: { rename: 'subscriber' },
      publisher_id: { rename: 'publisher' },
      publisher_events: { rename: 'publisherEvents' }
    },
    'delete': {
      fname: 'unsubscribe',
      subscriber_id: { rename: 'subscriber' },
      publisher_id: { rename: 'publisher' }
    },
    get: {
      fname: 'subscriptions',
      subscriber_id: { rename: 'subscriber' },
      publisher_id: { rename: 'publisher' }
    },
  }
};

function opt_to_pp(path, method, pp_name, opts) {
    method = method.toLowerCase();
    var cust = (table[path] && table[path][method] && table[path][method][pp_name]) || {};
    var name_used = opts[cust.rename] ? cust.rename : pp_name ;
    return opts[name_used] ? (cust.trans ? cust.trans(opts[name_used], name_used) : opts[name_used]) : null ;
}



