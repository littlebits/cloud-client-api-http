var r = require('request');


var uri = 'https://api-rest-stage.littlebitscloud.cc/options';

r.get(uri, {json: true}, handle_response);



function handle_response(err, res, body){
  if (err && err.code === 'ECONNREFUSED') {
    console.log('Supposed server at %s is unreachable', uri);
    throw err;
  }
  process.stdout.write(prepare_source(body));
}

function prepare_source(source){
  return  '\n// Generated from scripts/download-routes.js on '+ Date() +
          '\n\nmodule.exports = ' + JSON.stringify(source, null, 2) + ';';
}