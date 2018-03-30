/**
 * Created by Administrator on 2018/3/30.
 */
const http=require('http');
 var server =http.createServer(function (req,res) {
     console.log(req.url);
     res.write("傻子");//往前台写东西
     res.end();//结束请求
    // console.log('有人来了啊')


});
// 监听--------等着 人来啊
//端口--------数字
// request浏览器请求服务器  response服务器响应给浏览器（输出的东西）
server.listen(8080);//http://localhost：8080
