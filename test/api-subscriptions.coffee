# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.subscriptions', ->

  it 'sends a GET /subscriptions?... to the server', (done)->
    server = fix.request()
      .get('/subscriptions?publisher_id=b1&subscriber_id=a1')
      .reply(200, {})

    api.subscriptions { subscriber_id: 'a1', publisher_id: 'b1' }, a.successful_response server, done
