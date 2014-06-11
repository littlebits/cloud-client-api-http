# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.subscribe', ->

  it 'sends a POST /subscriptions {...} to the server', (done)->
    server = fix.request()
      .post('/subscriptions', { subscriber_id: 'a1', publisher_id: 'b1', publisher_events: ['amplitude'] })
      .reply(200, {})

    conf = { subscriber: 'a1', publisher: 'b1', publisherEvents: ['amplitude'] }
    api.subscribe conf, a.successful_response server, done
