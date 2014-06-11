noop = ->

process_signature = API._process_signature

describe 'process_signature', ->
  it 'foo()', ->
    r = process_signature({})
    a.deepEqual {}, r.overrides
    a.typeOf r.cb, 'function'


  it 'foo(->)', ->
    r = process_signature(0: noop)
    a.deepEqual {}, r.overrides
    a r.cb is noop


  it 'foo(<id>)', ->
    r = process_signature(0: 'foo')
    a.deepEqual
      device_id: 'foo'
    , r.overrides
    a.typeOf r.cb, 'function'


  it 'foo(<id>, {...})', ->
    r = process_signature({
      0: 'foo'
      1: { host: 'foobar' }
    })
    a.deepEqual
      device_id: 'foo'
      host: 'foobar'
    , r.overrides
    a.typeOf r.cb, 'function'


  it 'foo(<id>, {...}, ->)', ->
    r = process_signature({
      0: 'foo'
      1: { host: 'foobar' }
      2: noop
    })
    a.deepEqual
      device_id: 'foo'
      host: 'foobar'
    , r.overrides
    a r.cb is noop


  it 'foo({...})', ->
    r = process_signature(0: host: 'foobar')
    a.deepEqual
      host: 'foobar'
    , r.overrides
    a.typeOf r.cb, 'function'


  it 'foo({...}, ->)', ->
    r = process_signature({
      0: { host: 'foobar' }
      1: noop
    })
    a.deepEqual
      host: 'foobar'
    , r.overrides
    a r.cb is noop

  it 'converts camelCase into snake_case', ->
    r = process_signature({
      0: {
        accessToken: 'footok',
        durationMs: 5000,
        subscriberId: 'fooid',
      }
    })

    a.deepEqual {
        access_token: 'footok',
        duration_ms: 5000,
        subscriber_id: 'fooid'
      }
      , r.overrides