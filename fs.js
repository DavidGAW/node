/**
 * Created by Administrator on 2018/3/30.
 */
const fs=require('fs');
fs.readFile('aa.txt',function (err,data) {
    if(err){
        console.log('读取失败');
    }else{
        console.log(data.toString());
    }
});