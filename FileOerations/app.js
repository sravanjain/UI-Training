/* var file=require('fs');
file.writeFileSync("./demo.text","sravanjain")/* Overwrites/* 
file.appendFileSync("./demo.text","poonamjain")

var dataFromFile=file.readFileSync("./demo.text",{encoding:"utf-8"});
console.log(dataFromFile) */
var http=require('http');
var reqlistener=function(req,res)
{
    if(req.url=='/register')
    {res.writeHead(200);
        res.end("<div><h1>WELCOME</h1><h1>WELCOME</h1></div>")
    }
    else{
    res.writeHead(200);
    res.end("<h1>HIII</h1>")}
};
var server=http.createServer(reqlistener);
server.listen("3000")
/* after running in browser type localhost:3000*/