/**
 * Created by Kelvin on 4/12/15.
 */
var fs = require('fs');

fs.readFile('ReadMe.md',function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
});

fs.readFile('ReadMe.md','UTF-8',function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
});

try{
    var data = fs.readFileSync('ReadMe.md');
    console.log('同步读取: '+data);
}catch(e){
    console.log(e);
}