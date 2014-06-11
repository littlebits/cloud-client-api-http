# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;



describe '.output', ->

  it 'sends a POST with no payload to server by default', (done)->
    server = nock('https://api-http.littlebitscloud.cc')
      .post('/devices/a1/output')
      .reply(200, {})

    api.output 'a1', a.successful_response server, done

  it 'accepts percent and durationMs', (done)->
    server = nock('https://api-http.littlebitscloud.cc')
      .post('/devices/a1/output', { duration_ms: 50, percent: 99 })
      .reply(200, {})

    conf = { device_id: 'a1', durationMs: 50, percent: 99 }

    api.output conf, a.successful_response server, done
