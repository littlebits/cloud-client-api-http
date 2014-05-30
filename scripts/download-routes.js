var r = require('request');


// var uri = 'https://api-rest-stage.littlebitscloud.cc/options';
var uri = 'http://localhost:8000/options';

function handle_response(err, res, body){
  var contents = 'module.exports = ' + JSON.stringify(body, null, 2) +';';
  process.stdout.write(contents);
}


r.get(uri, {json: true}, handle_response);