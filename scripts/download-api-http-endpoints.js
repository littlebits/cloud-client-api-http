'use strict';
var r = require('request');
var fs = require('fs');


var uri = 'https://api-rest-stage.littlebitscloud.cc/options';

function save_data(err, res, body){
  var contents = 'module.exports = ' + JSON.stringify(body, null, 2) +';';
  fs.writeFileSync((__dirname + '/../assets/api-http-endpoints.js'), contents);
}


r.get(uri, {json: true}, save_data);