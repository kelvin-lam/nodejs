/**
 * Created by Kelvin on 4/12/15.
 */

/*var http = require('http');
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Hello!</h1>');
    resp.end('<p>That is it.</p>');
});
server.listen(3000);
server.on('close',function(){
    console.log('HTTP closed.');
});
server.close();
console.log('HTTP server is listening to #3000');
*/

/*request监听*/
var http = require('http');
var server = new http.Server();
server.on('request',function(req, resp){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Hello!</h1>');
    resp.end('<p>That is it.</p>');
});
server.listen(3000);
