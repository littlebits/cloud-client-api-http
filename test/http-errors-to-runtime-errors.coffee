# Until there is a good mocking library in browser
# skip testing in that environment.
return if isClient



describe 'response errors are processed into client runtime errors', ->

  it 'including 401', (done)->
    exp_err =
      statusCode: 401
      message: 'Token failed authorization'
      error: 'Unauthorized'

    convert_given_error 401, exp_err, done



  it 'including 500', (done)->
    exp_err =
      statusCode: 500
      message: 'Nuclear meltdown, run away.'
      error: 'Internal Server Error'

    convert_given_error 500, exp_err, done



  it 'including error without response body', (done)->
    convert_given_error 368, null, done



  it 'including error without object with message', (done)->
    convert_given_error 368, { random: 'thing' }, done






convert_given_error = (status_code, exp_err, done)->
  server = fix.request().get('/devices').reply(status_code, exp_err)

  api.devices (err)->
    if exp_err?.message
      a.equal err?.message, exp_err.message
    else
      a err?.message?.match(/some sort of error/)
    done()