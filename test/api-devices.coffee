# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

devices = API.devices



describe '.devices', ->

  beforeEach ->
    @server = fix.request()
      .get('/devices').reply(200, [])

  it 'sends a GET /devices to server', (done)->
    api.devices a.successful_response @server, done
