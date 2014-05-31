# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

output = API.output



describe '.output', ->

  it 'sends a POST with no payload to server by default', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .post('/devices/a1/output')
      .reply(200, {})

    output 'a1', (err, result)->
      assert.nock_done n
      done()

  it 'accepts percent and durationMs', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .post('/devices/a1/output', { duration_ms: 50, percent: 99 })
      .reply(200, {})

    output { device_id: 'a1', durationMs: 50, percent: 99 }, (err, result)->
      assert.nock_done n
      done()