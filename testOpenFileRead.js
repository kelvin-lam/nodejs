/**
 * Created by Kelvin on 4/12/15.
 */
 var fs = require('fs');
fs.open('ReadMe.md','r',function(err, fd){
    if(err){
        console.log(err);
        return;
    }
    var buffer = new Buffer(8);
    fs.read(fd, buffer, 0 , 8, null, function(error, bytesRead, buffer){
        if(error){
            console.log(error);
            return;
        }
        console.log('bytes read: '+ bytesRead);
        console.log(buffer);//todo 二进制转码
    });
});