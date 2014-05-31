{GLOBE, isClient} = require('plat')

GLOBE.isClient = isClient
GLOBE.assert = require('chai').assert;
GLOBE.lo = require('lodash')
GLOBE.API = if isClient then require('littlebits-cloud-http') else require('../')



# Until there is a good mocking library in browser
# skip mock testing in that environment.
if isClient then return

GLOBE.nock = require('nock')

assert.nock_done = (nock)->
  assert nock.isDone, 'nock done'
