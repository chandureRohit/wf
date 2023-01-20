var http=require('http');
var dt=require('/Users/rohitchandure/Desktop/node/build_node.js');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("The date and time are curentelly:"+dt.myDateTime());
    res.end();
}).listen(8001);