/**
 * Created by Administrator on 2016/8/10.
 */
var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello world');
}).listen(3000);
console.log('sever running at 3000');