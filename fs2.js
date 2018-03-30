const fs=require('fs');

fs.writeFile('bb.txt','123123123',function (err) {
    if(err){
        console.log('读取失败');
    }else{

    }
});