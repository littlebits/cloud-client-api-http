# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient

h = '34b5eada90b51d4713a21db848b18ae4'


describe '.activate', ->

  it 'sends a POST with only hash payload', (done)->
    server = fix.request().post('/devices/a1', { device_hash: h }).reply(201, {})
    api.activate 'a1', { device_hash: h }, a.successful_response server, done

  it 'doesn’t send a POST with no hash payload', (done)->
    server = fix.request().post('/devices/a1').reply(401, {})
    api.activate 'a1', a.unauthorized_response server, done

  it 'can send a POST with PUT-style payload optionally', (done)->
    server = fix.request().post('/devices/a1', { device_hash: h, update: { label: 'foobar' } }).reply(201, {})
    api.activate 'a1', { device_hash: h, update: { label: 'foobar' } }, a.successful_response server, done

  it 'works using conf-style', (done)->
    server = fix.request().post('/devices/a1').reply(201, {})
    api.activate { device_id: 'a1', device_hash: h }, a.successful_response server, done
