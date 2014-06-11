merge = lo.merge



describe '.defaults', ->
  defs1 = defs2 = undefined

  beforeEach ->
    defs1 =
      host: 'api-rest-stage.littlebitscloud.cc'
      access_token: 'dev'
      version: '1'

    defs2 = { version: '2' }



  describe 'on parent API object (.defaults)', ->

    it 'stores default options', ->
      test_defaults_store API, defs1, {}


    it 's a new api object, it does not mutate api', ->
      test_defaults_immutable API, defs1, defs2


    it 'is infinitely recursive', ->
      @slow 1000 # Tell mocha its ok for this test to be slow
      test_defaults_recursive API, defs1, defs2



  describe 'on api function (.<function>.defaults)', ->
    api = mdefs1 = undefined

    beforeEach ->
      api = API.defaults(defs1)
      mdefs1 = { ms: 3000 }

    it 'stores default options', ->
      test_defaults_store api.output, mdefs1, defs1

    it 's a new function, it does not mutate function', ->
      test_defaults_immutable api.output, defs1, defs2

    it 'is infinitely recursive', ->
      @slow 1000 # Tell mocha its ok for this test to be slow
      test_defaults_recursive api.output, defs1, defs2






test_defaults_store = (o, adefs, bdefs) ->
  o2 = o.defaults(adefs)
  a.deepEqual o2.defaults(), merge({}, bdefs, adefs), 'defaults have been stored'

test_defaults_immutable = (o, adefs, bdefs) ->
  o2 = o.defaults(adefs)
  o3 = o2.defaults(bdefs)
  a.deepEqual o3.defaults(), merge({}, adefs, bdefs), 'new defaults have been stored'
  a.deepEqual o2.defaults(), adefs, 'new api was created, old api not mutated'

test_defaults_recursive = (o, adefs, bdefs) ->
  o2 = o.defaults(adefs)
  o3 = o2.defaults(bdefs)
  i = 0
  o3 = o3.defaults(bdefs)  while i++ <= 10000
  a.deepEqual o3.defaults(), merge({}, adefs, bdefs), 'new defaults have been stored'
  a.deepEqual o2.defaults(), adefs, 'new api was created, old api not mutated'