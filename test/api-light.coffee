# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.light', ->

  it 'sends a POST with no payload to server by default', (done)->
    server = fix.request().post('/devices/a1/light').reply(200, {})

    api.light 'a1', a.successful_response server, done



  it 'accepts color, duration_ms, mode', (done)->
    conf =
      duration_ms: 50
      mode: 'blink'
      color: 'purple'

    server = fix.request().post('/devices/a1/light').reply(200, {})

    api.light 'a1', conf, a.successful_response server, done
