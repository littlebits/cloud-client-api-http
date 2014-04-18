# x -- bad
# v -- good



# classical api
  # v -- easy to curry
  # x -- cannot inspect curried defaults (e.g. compraed to *.defaults())
  # x -- no universal/method defaults overriding
  # x -- depends on universal config instantiation === methods *require* outside state
  # model interaction
    api.get_bits log_result

    api.get_bit 'a25988', log_result
    api.update_bit 'a25988', {label: 'new label'}, log_result
    api.create_bit 'a25988', log_result
    api.delete_bit 'a25988', log_result

  # subscriptions
    api.get_subscriptions 'a25988', log_result
    api.subscribe_to 'a25988', 'http://foobar.com', ['input'], log_result
    api.subscribe_unto 'a25988', 'http://foobar.com', ['input'], log_result

  # amplitude interaction
    api.emit_output 'a25988', {percent:5.54, ms:4000}, log_result




# reducing api to a single bit
  bit = api.bit('a25988'); # x -- "magical" bit method

  bit.get_bit log_result
  bit.update_bit {label: 'new label'}, log_result
  bit.create_bit log_result
  bit.delete_bit log_result

  bit.get_subscriptions log_result
  bit.subscribe_to 'http://foobar.com', ['input'], log_result
  bit.subscribe_unto 'http://foobar.com', ['input'], log_result

  bit.emit_output {percent:5.54, ms:4000}, log_result



# arbitrarly reducing the api

# defaults system
  # v -- uniform configurability (.defaults)
  # v -- immutable configurations
  # v -- recursive configurability
  # v -- self-documenting params
  # v -- can inspect defaults via *.defaults()
  # x -- ...unclear composition?
  # x -- methods not conducive to currying
  api = api.defaults() # set universal defaults, return new **api**
  method = api.<method>.defaults() # override universal defaults and set method defaults, return new **method**

# examples
  api = API.defaults { token: 'dev', version: 1 }
  bit = api.defaults { bit_id: 'a25988' }

  bit.get_bit log_result
  bit.get_bit {bit_id: 'a'} # alt

  bit.create_bit {}, log_result
  bit.delete_bit log_result

  output = bit.emit_output.defaults { bit_id: 'b', ms: 5000 }
  output log_result
  output { percent: 50 }, log_result

  api.subscriptions_get   { bit_id: 'a25988' }, log_result
  api.subscription_create { bit_id: 'a25988', events: ['input'], to: 'http://foobar.com' }, log_result
  api.subscription_delete { bit_id: 'a25988', events: ['input'], to: 'http://foobar.com' }, log_result



# method system
  # x -- non-uniform configurability (config/context/send/etc)
  api = API.config
  bit = api.context { bit_id: 'a25988' }
  bit.output({ bit_id: 'a25988' }).send(log_result)