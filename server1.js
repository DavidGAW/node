const http=require('http');

var server =http.createServer(function (req,res) {
    switch (req.url){
        case '/1.html':
            res.write('111');
            break;
        case '/2.html':
            res.write('222');
            break;
        default:
            res.write('404');
            break;
    }
    // console.log(req.url);



});
// 监听--------等着 人来啊
//端口--------数字
// request浏览器请求服务器  response服务器响应给浏览器（输出的东西）
server.listen(8080);//http://localhost：8080
