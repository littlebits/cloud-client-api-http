# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;



describe '.device', ->

  beforeEach ->
    @server = fix.request()
      .get('/devices/a1').reply(200, {})

  it 'sends a GET /devices/{device_id} to server', (done)->
    api.device 'a1', a.successful_response @server, done
