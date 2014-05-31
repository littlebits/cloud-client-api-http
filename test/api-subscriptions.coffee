# Until there is a good mocking library in browser
# skip testing in that environment.
if isClient then return;

subscriptions = API.subscriptions



describe '.subscriptions', ->

  it 'sends a GET /subscriptions?... to the server', (done)->
    n = nock('https://api-http.littlebitscloud.cc')
      .get('/subscriptions?publisher_id=b1&subscriber_id=a1')
      .reply(200, {})

    subscriptions { subscriber: 'a1', publisher: 'b1' }, (err, result)->
      assert.nock_done n
      done()