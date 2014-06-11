# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.activate', ->

  beforeEach ->
    @server = fix.request()
      .post('/devices/a1').reply(200, {})

  it 'sends a POST with no payload', (done)->
    api.activate 'a1', a.successful_response @server, done

  it 'works using conf-style', (done)->
      api.activate { device_id: 'a1' }, a.successful_response @server, done
