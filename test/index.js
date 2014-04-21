/* globals it, describe, beforeEach */
'use strict';

var assert = require('assert');
var API = require('../');
var lo = require('lodash'),
    merge = lo.merge;



describe('cloud-client-api-http', function(){
  require('./method-process-signature');
  var defs1, defs2;

  beforeEach(function(){
    defs1 = {
      host: 'api-rest-stage.littlebitscloud.cc',
      accessToken: 'dev',
      apiVersion: '1'
    };
    defs2 = {
      apiVersion: '2'
    };
  });



  describe('api.defaults', function(){
    it('stores default options', function(){
      test_defaults_store(API, defs1, {});
    });

    it('returns a new api object, it does not mutate api', function(){
      test_defaults_immutable(API, defs1, defs2);
    });

    it('is infinitely recursive', function(){
      this.slow(200); // This test will be a bit slower than others, up the warning limit
      test_defaults_recursive(API, defs1, defs2);
    });
  });



  describe('api[name].defaults', function(){
    var api, mdefs1;

    beforeEach(function(){
      api = API.defaults(defs1);
      mdefs1 = { ms: 3000 };
    });

    it('stores default options', function(){
      test_defaults_store(api.output, mdefs1, defs1);
    });

    it('returns a new function, it does not mutate function', function(){
      test_defaults_immutable(api.output, defs1, defs2);
    });

    it('is infinitely recursive', function(){
      this.slow(200); // This test will be a bit slower than others, up the warning limit
      test_defaults_recursive(api.output, defs1, defs2);
    });
  });
});



function test_defaults_store(o, adefs, bdefs){
  var a = o.defaults(adefs);
  assert.deepEqual(a.defaults(), merge({}, bdefs, adefs), 'defaults have been stored');
}

function test_defaults_immutable(o, adefs, bdefs){
  var a = o.defaults(adefs);
  var b = a.defaults(bdefs);
  assert.deepEqual(b.defaults(), merge({}, adefs, bdefs), 'new defaults have been stored');
  assert.deepEqual(a.defaults(), adefs, 'new api was created, old api not mutated');
}

function test_defaults_recursive(o, adefs, bdefs){
  var a = o.defaults(adefs);
  var b = a.defaults(bdefs);
  var i = 0;
  while (i++ <= 10000) b = b.defaults(bdefs);
  assert.deepEqual(b.defaults(), merge({}, adefs, bdefs), 'new defaults have been stored');
  assert.deepEqual(a.defaults(), adefs, 'new api was created, old api not mutated');
}