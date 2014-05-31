# cloud-api-http-client [![build status](https://secure.travis-ci.org/littlebits/cloud-client-api-http.svg)](http://travis-ci.org/littlebits/cloud-client-api-http)

Lightweight wrapper for littleBits Cloud HTTP API


## Installation

On the client:

    component install littlebits/cloud-client-http-api

On the server (soon, not published yet):

    npm install --save littlebits-cloud-http



## Guide

```js

api = api.defaults({ device_id: 'foobar' })
// All api functions will now default to using device_id
// 'foobar' for those abstracting HTTP endpoints that use
// the {device_id} path-param (e.g. /devices/{device_id}/output).

api.output()
// -> <err> <result>
// Neat; By default functions log to console
// which is great for playing around.

api.output('foobar2')
// The device_id can also be specified as the
// first argument (oh, and here now the default device_id
// of 'foobar' is overriden), allowing the second argument
// to focus on your payload...

api.output('foobar2', { percent: 50, durationMs: 5000 })
// like so :). Of course you can work with objects only
// as needed/desired...

api.output({device_id: 'foobar2', percent: 50, durationMs: 5000 })
// Hm, these arguments are getting repetitive, lets stop this.

output = api.output.defaults({device_id: 'foobar2', percent: 50, durationMs: 5000 })
// Better. Now we have a output function with new defaults.
// and we can always call .defaults again should we wish.
// Lets use it now.

output(function(err, result){
  if (err) ...

  ...
});
// Pass your own callback to handle the
// the io error and/or return value. This of course
// elliminates the default logging seen above.



// Helpful notes about .defaults()

// 1. it does not mutate
//   - .defaults() on the api object returns an entirely new api
//   - .defaults() on a function returns an entirely new function
assert api.defaults({...}) !== api

// 2. it is infinitly recrusive so this is possible (but psychotic)
api.defaults({...}).defaults({...})/* ad infinitum*/.output.defaults({...}).defaults({...}) /* ad infinitum */

// 3. defaults can be introspected by passing no arguments, e.g. given a stock api instnace
api.defualts()
// -> { host: 'https://api-http.littlebitscloud.cc', version: '2' }



// Fin.

// You've seen several different function signatures.
// They are at your disposal to choose as desired.
// See API docs for more details and Have fun!
```


## API

TODO; See tests for now.

##### .output

##### .device

##### .devices

##### .subscribers

##### .unsubscribe

##### .subscribe

##### .defaults

##### {function}.defaults