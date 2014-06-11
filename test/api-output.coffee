# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.output', ->

  it 'sends a POST with no payload to server by default', (done)->
    server = fix.request().post('/devices/a1/output').reply(200, {})

    api.output 'a1', a.successful_response server, done



  it 'accepts percent and duration_ms', (done)->
    conf =
      duration_ms: 50
      percent: 99

    server = fix.request().post('/devices/a1/output', conf).reply(200, {})

    api.output 'a1', conf, a.successful_response server, done
