/**
 * Created by Kelvin on 4/13/15.
 */
var http = require('http');
var querystring = require('querystring');
var contents = querystring.stringify({
    name:'kelvin',
    age:21,
    address:'hawaii',
    id:13,
    sex:'male'
});
var options={
    host:'localhost',
    path:'/',
    port:3000,
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
}
var req = http.request(options, function(resp){
    resp.setEncoding('utf-8');
    resp.on('data',function(data){
        console.log('Response from server');
        console.log(data)
    });
});
req.write(contents);
req.end();
