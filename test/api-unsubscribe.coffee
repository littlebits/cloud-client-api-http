# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe '.unsubscribe', ->

  it 'sends a DELETE /subscriptions {...} to the server', (done)->
    conf =
      subscriber_id: 'a1'
      publisher_id: 'b1'

    server = fix.request().delete('/subscriptions', conf).reply(200, {})

    api.unsubscribe conf, a.successful_response server, done
