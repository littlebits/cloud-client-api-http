# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

subscribe = API.subscribe



describe '.subscribe', ->

  it 'sends a POST /subscriptions {...} to the server', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .post('/subscriptions', { subscriber_id: 'a1', publisher_id: 'b1', publisher_events: ['amplitude'] })
      .reply(200, {})

    subscribe { subscriber: 'a1', publisher: 'b1', publisherEvents: ['amplitude'] }, (err, result)->
      assert.nock_done n
      done()