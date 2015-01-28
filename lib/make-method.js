var process_signature = require('./method-process-signature')
var merge = require('merge')



module.exports = make_method

function make_method(base_defaults, f) {
  // Give this function a better name. We could
  // accept a name parameter and create the function
  // using Function constructor.
  function todo_name_me() {
    var args = process_signature(arguments)
    var opts = merge({}, base_defaults, args.overrides)
    return f.apply(null, [opts, args.cb])
  }

  todo_name_me.defaults = function(base_defaults_method) {
    if (arguments.length === 0) return base_defaults
    return make_method(merge({}, base_defaults, base_defaults_method), f)
  }

  return todo_name_me
}
