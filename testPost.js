/**
 * Created by Kelvin on 4/12/15.
 */
var http = require('http');
var querystring = require('querystring');
var util = require('util');
http.createServer(function(req, resp){
    var post = '';
    req.on('data', function(chunk){
        post += chunk;
    });
    req.on('end', function(){
        post = querystring.parse(post);
        resp.end(util.inspect(post));
        console.log(post.id);//获取参数
        console.log(post.sex);
    });
}).listen(3000);