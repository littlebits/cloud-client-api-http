# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.subscribe', ->

  it 'sends a POST /subscriptions {...} to the server', (done)->
    conf =
      subscriber_id: 'a1'
      publisher_id: 'b1'
      publisher_events: ['amplitude']

    server = fix.request()
      .post('/subscriptions', conf)
      .reply(200, {})

    api.subscribe conf, a.successful_response server, done
