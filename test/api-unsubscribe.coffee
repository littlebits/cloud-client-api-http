# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

unsubscribe = API.unsubscribe



describe '.unsubscribe', ->

  it 'sends a DELETE /subscriptions {...} to the server', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .delete('/subscriptions', { subscriber_id: 'a1', publisher_id: 'b1' })
      .reply(200, {})

    unsubscribe { subscriber: 'a1', publisher: 'b1' }, (err, result)->
      assert.nock_done n
      done()