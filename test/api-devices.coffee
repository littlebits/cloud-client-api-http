# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

devices = API.devices



describe '.devices', ->

  it 'sends a GET /devices to server', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .get('/devices')
      .reply(200, [])

    devices (err, result)->
      assert.nock_done n
      done()