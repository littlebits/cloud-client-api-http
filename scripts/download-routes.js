var r = require('request');


// var uri = 'https://api-rest-stage.littlebitscloud.cc/options';
var uri = 'http://localhost:8000/options';

r.get(uri, {json: true}, handle_response);



function handle_response(err, res, body){
  process.stdout.write(prepare_source(body));
}

function prepare_source(source){
  return 'module.exports = ' + JSON.stringify(source, null, 2) + ';';
}