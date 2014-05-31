# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

device = API.device



describe '.device', ->

  it 'sends a GET /devices/{device_id} to server', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .get('/devices/a1')
      .reply(200, {})

    device 'a1', (err, result)->
      assert.nock_done n
      done()