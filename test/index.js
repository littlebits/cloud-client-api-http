/* globals it, describe, beforeEach */
'use strict';

var assert = require('assert');
var API = require('../');
var lo = require('lodash'),
    merge = lo.merge;



describe('cloud-client-api-http', tests);



function tests(){
  var defs1, defaults2;

  beforeEach(function(){
    defs1 = {
      host: 'api-rest-stage.littlebitscloud.cc',
      accessToken: 'dev',
      apiVersion: '1'
    };
    defaults2 = {
      apiVersion: '2'
    };
  });

  it('api.defaults stores default options', function(){
    var api1 = API.defaults(defs1);
    assert.deepEqual(api1.defaults(), defs1, 'defaults have been stored');
  });

  it('api.defaults returns a new api object, it does not mutate api', function(){
    var api1 = API.defaults(defs1);
    var api2 = api1.defaults(defaults2);
    assert.deepEqual(api2.defaults(), merge({}, defs1, defaults2), 'new defaults have been stored');
    assert.deepEqual(api1.defaults(), defs1, 'new api was created, old api not mutated');
  });

  it('api.defaults is infinitely recursive', function(){
    this.slow(200); // This test will be a bit slower than others, up the warning limit
    var api1 = API.defaults(defs1);
    var api_n = api1.defaults(defaults2);
    var i = 0;
    while (i++ <= 10000) api_n = api_n.defaults(defaults2);
    assert.deepEqual(api_n.defaults(), merge({}, defs1, defaults2), 'new defaults have been stored');
    assert.deepEqual(api1.defaults(), defs1, 'new api was created, old api not mutated');
  });

  describe('<f>.defaults', function(){
    var api, mdefs1;

    beforeEach(function(){
      api = API.defaults(defs1);
      mdefs1 = { ms: 3000 };
    });

    it('stores default options', function(){
      var output = api.output.defaults(mdefs1);
      assert.deepEqual(output.defaults(), merge({}, defs1, mdefs1), 'defaults have been stored');
    });
  });
}