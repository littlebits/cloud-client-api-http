noop = ->

process_signature = API._process_signature

describe 'process_signature', ->
  it 'foo()', ->
    r = process_signature({})
    assert.deepEqual {}, r.overrides
    assert.typeOf r.cb, 'function'


  it 'foo(->)', ->
    r = process_signature(0: noop)
    assert.deepEqual {}, r.overrides
    assert r.cb is noop


  it 'foo(<id>)', ->
    r = process_signature(0: 'foo')
    assert.deepEqual
      bit_id: 'foo'
    , r.overrides
    assert.typeOf r.cb, 'function'


  it 'foo(<id>, {...})', ->
    r = process_signature({
      0: 'foo'
      1: { host: 'foobar' }
    })
    assert.deepEqual
      bit_id: 'foo'
      host: 'foobar'
    , r.overrides
    assert.typeOf r.cb, 'function'


  it 'foo(<id>, {...}, ->)', ->
    r = process_signature({
      0: 'foo'
      1: { host: 'foobar' }
      2: noop
    })
    assert.deepEqual
      bit_id: 'foo'
      host: 'foobar'
    , r.overrides
    assert r.cb is noop


  it 'foo({...})', ->
    r = process_signature(0: host: 'foobar')
    assert.deepEqual
      host: 'foobar'
    , r.overrides
    assert.typeOf r.cb, 'function'


  it 'foo({...}, ->)', ->
    r = process_signature({
      0: { host: 'foobar' }
      1: noop
    })
    assert.deepEqual
      host: 'foobar'
    , r.overrides
    assert r.cb is noop