{GLOBE, isClient} = require('plat')


GLOBE.assert = require('chai').assert;
GLOBE.lo = require('lodash')
GLOBE.API = if isClient then require('littlebits-cloud-http') else require('../')