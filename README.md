# cloud-api-http-client [![Circle CI](https://circleci.com/gh/littlebits/cloud-client-api-http.svg?style=svg)](https://circleci.com/gh/littlebits/cloud-client-api-http)

Lightweight wrapper for littleBits Cloud HTTP API


## Installation
```
npm install --save littlebits-cloud-http
```



## Example

```js
var api = require('littlebits-cloud-http')
          .defaults({ access_token: 'askdjfldaksjfkdlsjfdkl234324' })
// We've created a new instance of our api with an access_token to be used by all requests.

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
// first argument (overriding defaults, not mutating),
// allowing the second argument to focus on
// your payload...

api.output('foobar2', { percent: 50, duration_ms: 5000 })
// like so :). Of course you can work with objects only
// as needed/desired...

api.output({device_id: 'foobar2', percent: 50, duration_ms: 5000 })
// Hm, these arguments are getting repetitive, lets stop this.

var output = api.output.defaults({device_id: 'foobar2', percent: 50, duration_ms: 5000 })
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



## API Functions

Abbreviated information. See [*API Function Signatures*](#api-function-signatures) for details about the argument pattern uniformly accepted.

----
#### .defaults()

See [*Defaults System*](#defaults-system).

Key Points:
  - Supports snake_case or camelCase key names
  - Returns new instances, does not mutate existing defaults
  - Returns current defaults if invoked with no arguments


----
#### .devices()

Get information for all devices.

`callback` result argument: `[Device]`


----
#### .device()

Get information for one device.

`options` arguments

  - `device_id :: String`

`callback` result argument: `Device`


----
#### .activate()

Activate one device. (FYI: associates device to user; User id is attained from the provided access_token)

`options` arguments

  - `device_id :: String`

`callback` result argument: `Device`


----
#### .deactivate()

Dectivate one device.

`options` arguments

  - `device_id :: String`

`callback` result argument: `Device`


----
#### .output()

Send amplitude out of the device.

`options` arguments:

  - `percent :: Float | >= 0, <= 100`
  - `duration_ms :: Integer | >= 0`
  - `device_id :: String`

`callback` result argument: ***TODO***


----
#### .light()

Activate device light.

`options` arguments:

  - `color :: String | "green" "yellow" "red" "blue" "purple" "white" "cyan" "clownbarf"`
  - `mode :: String | "blink" "hold"`
  - `duration_ms :: Integer | >= 0`
  - `device_id :: String`

`callback` result argument: ***TODO***


----
#### .subscriptions()

Get the subscriptions for given sub/pub.

`options` arguments:

  - `?` `subscriber_id :: device_id || uri`  
    Filter subscriptions to those where `subscriber_id` matches.
  - `?` `publisher_id :: device_id`  
    Filter subscriptions to those where `publisher_id` matches.

`callback` result argument: `[Subscription]`


----
#### .unsubscribe()

Delete the subscription for given sub/pub.

`options` arguments:

  - `subscriber_id :: device_id || uri`
  - `publisher_id :: device_id`

`callback` result argument: ***TODO***


----
#### .subscribe()

Create a new subscription for given sub/pub.

`options` arguments:

  - `subscriber_id :: device_id || uri`
  - `publisher_id :: device_id`
  - `?` `publisher_events :: [Event]`  
    Defaults to: `["amplitude:delta:ignite"]`

`callback` result argument: ***TODO***



## Types

##### Event
```
A String of any following value:

"amplitude"
"amplitude:delta:sustain"
"amplitude:delta:ignite"
"amplitude:delta:release"
"amplitude:delta:nap"
"amplitude:level:active"
"amplitude:level:idle"
```

##### Subscription
```
{
  subscriber_id    :: device_id || URI
  publisher_id     :: device_id
  publisher_events :: [Event]
}
```

##### Device
```
{
  id            :: String
  user_id       :: Integer
  label         :: String
  subscribers   :: [Subscription]
  subscriptions :: [Subscription]
}
```



## API Function Signatures

All API functions (***except `.defaults`***) are variadic-polymorphic, following these defintions.

##### Arity 0
```
f :: -> void
```
##### e.g.:
```js
api.output()
```


----
##### Arity 1
```
f :: (err, * -> void) -> void
```
```
f :: ID -> void
```
```
f :: Options -> void
```
##### e.g.:
```js
api.output(function(err, result){ /*...*/ })
api.output('foobar-device-id')
api.output({ device_id: 'foobar-device-id', duration_ms: 500 })
```


----
##### Arity 2
```
f :: ID, (err, * -> void) -> void
```
```
f :: Options, (err, * -> void) -> void
```
```
f :: ID, Options -> void
```
##### e.g.:
```js
api.output('foobar-device-id', function(err, result){ /*...*/ })
api.output({ device_id: 'foobar-device-id', duration_ms: 500 }, function(err, result){ /*...*/ })
api.output('foobar-device-id', { duration_ms: 500 })
```


----
##### Arity 3
```
f :: ID, Options, (err, * -> void) -> void
```
##### e.g.:
```js
api.output('foobar-device-id', { duration_ms: 500 }, function(err, result){ /*...*/ })
```
For all arity cases:

- `Options` arguments that you omit are patched by defaults. You may customize defaults (see next section).

- `ID` refers to `device_id` which can alternatively be argued in `Options` as `device_id`. Certain functions do not need a `device_id`, such as `subscribe` in which case it is useless (but harmless), to argue this.

- `callback` is patched by `console.log`. This is useful for rapid manual tests, playing around, etc. It also helps keep track of unhandled `callbacks` which you *should* be handling in non-trivial work. If you really want a `noop` then just argue one.


## Defaults system

#### .defaults()

##### get
```
defaults :: -> Options
```
Get the current defaults.

##### set

```
defaults :: Options -> API
```
Create a new api with new defaults. Existing api instance is not mutated. All functions of new api instance will read from these new defaults.

This is a good place to argue `access_token` etc.

`options` arguments:

  - `?` `host :: URI`  
    The HTTP server to make requests against. By default equals `'api-http.littlebitscloud.cc'` but you may override as desired, e.g. work against local development servers.
  - `?` `version :: String`  
    The littleBits Cloud HTTP API version to use. By default equals `'2'`.
  - `?` `access_token :: String`  
    The OAuth access_token that will be used by the server to authorize your requsts.



#### .{api_function}.defaults()
##### get
```
defaults :: -> Options
```
Get the current defaults.

##### set

```
defaults :: Options -> API_Function
```
Create a new api function (f) with new defaults. Existing f is not mutated.

`options` arguments: See docs for each function respectively.
