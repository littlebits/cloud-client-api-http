var r = require('request');


var uri = 'https://api-rest-stage.littlebitscloud.cc/options';

function handle_response(err, res, body){
  var contents = 'module.exports = ' + JSON.stringify(body.routes, null, 2) +';';
  process.stdout.write(contents);
}


r.get(uri, {json: true}, handle_response);