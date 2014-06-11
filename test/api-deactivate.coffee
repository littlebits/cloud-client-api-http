# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;



describe '.deactivate', ->

  beforeEach ->
    @server = fix.request()
      .delete('/devices/a1').reply(200, {})

  it 'sends a DELETE with no payload', (done)->
    api.deactivate 'a1', a.successful_response @server, done

  it 'works using conf-style', (done)->
      api.deactivate { device_id: 'a1' }, a.successful_response @server, done
