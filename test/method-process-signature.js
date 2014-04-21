/* globals it, describe  */
'use strict';

var assert = require('assert');
var process_signature = require('../lib/method-process-signature');
function noop(){}


describe.only('api signature', function(){

  it('foo()', function(){
    var r = process_signature({});
    assert.deepEqual({}, r.overrides);
    assert(typeof r.cb === 'function');
  });

  it('foo(->)', function(){
    var r = process_signature({0: noop});
    assert.deepEqual({}, r.overrides);
    assert(r.cb === noop);
  });

  it('foo(<id>)', function(){
    var r = process_signature({0:'foo'});
    assert.deepEqual({bit_id: 'foo'}, r.overrides);
    assert(typeof r.cb === 'function');
  });

  it('foo(<id>, {...})', function(){
    var r = process_signature({0:'foo', 1: {host:'foobar'}});
    assert.deepEqual({bit_id: 'foo', host: 'foobar'}, r.overrides);
    assert(typeof r.cb === 'function');
  });

  it('foo(<id>, {...}, ->)', function(){
    var r = process_signature({0:'foo', 1: {host:'foobar'}, 2: noop});
    assert.deepEqual({bit_id: 'foo', host: 'foobar'}, r.overrides);
    assert(r.cb === noop);
  });

  it('foo({...})', function(){
    var r = process_signature({0:{host: 'foobar'}});
    assert.deepEqual({host: 'foobar'}, r.overrides);
    assert(typeof r.cb === 'function');
  });

  it('foo({...}, ->)', function(){
    var r = process_signature({0: {host: 'foobar'}, 1: noop});
    assert.deepEqual({host: 'foobar'}, r.overrides);
    assert(r.cb === noop);
  });

});