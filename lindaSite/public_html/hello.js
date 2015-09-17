var http = require('http');
var myServer = http.createServer(function(req, res){
      res.writeHead(200,{"Content-Type" : "text/html"}); //client can not see 
      res.write("Hello");                                 //client can see
      res.end();                                          //response is end
});

myServer.listen(3000); 
