{GLOBE, isClient} = require('plat')

GLOBE.isClient = isClient
GLOBE.a = require('chai').assert;
GLOBE.API = if isClient then require('littlebits-cloud-http') else require('../')
GLOBE.api = API;



# Until there is a good mocking library in browser
# skip mock testing in that environment.
return if isClient



GLOBE.nock = require('nock')
GLOBE.fix = {}

fix.request = ->
  nock('https://api-http.littlebitscloud.cc')

a.successful_response = (server, done)->
  (err, result)->
    a !err, err?.message
    server.done()
    done()
