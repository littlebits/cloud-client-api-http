# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;



describe '.unsubscribe', ->

  it 'sends a DELETE /subscriptions {...} to the server', (done)->
    server = fix.request()
      .delete('/subscriptions', { subscriber_id: 'a1', publisher_id: 'b1' })
      .reply(200, {})

    conf = { subscriber: 'a1', publisher: 'b1' }
    api.unsubscribe conf, a.successful_response server, done
