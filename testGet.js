/**
 * Created by Kelvin on 4/12/15.
 */
var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type':'text/plain'});
    resp.end(util.inspect(url.parse(req.url,true)));//true 封装成json对象, false则为字符串
}).listen(3000);