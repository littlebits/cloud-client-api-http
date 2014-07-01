# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.activate', ->

  it 'sends a POST with no payload', (done)->
    server = fix.request().post('/devices/a1').reply(200, {})
    api.activate 'a1', a.successful_response server, done

  it 'can send a POST with PUT-style payload optionally', (done)->
    server = fix.request().post('/devices/a1', { update: { label: 'foobar' } }).reply(200, {})
    api.activate 'a1', { update: { label: 'foobar' } }, a.successful_response server, done

  it 'works using conf-style', (done)->
    server = fix.request().post('/devices/a1').reply(200, {})
    api.activate { device_id: 'a1' }, a.successful_response server, done
