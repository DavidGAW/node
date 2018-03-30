/**
 * Created by Administrator on 2018/3/30.
 */
const http =require('http');
const fs =require('fs');
const server =http.createServer(function (req ,res) {
   var file_name=  './www'+req.url;
    fs.readFile(file_name,function (err,data) {
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
}).listen('8080');