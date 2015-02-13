# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.device_update', ->
  payload = { update: { label: 'foobar' } }

  beforeEach ->
    @server = fix.request().put('/devices/a1', payload).reply(200, {})

  it 'sends a PUT /devices/{device_id} to server', (done)->
    api.device_update 'a1', payload, a.successful_response @server, done
