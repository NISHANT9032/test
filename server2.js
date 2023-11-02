const http=require('http');

const server =http.createServer(ServerCallback);
let a=[];
function ServerCallback(req,res){
    //console.log(req.url);
    //res.write("Hello");
    //res.end();
    //const url=req.url;
    if(req.method=='POST'){
        a.push(1);
        
    }
    else if(req.method=='PUT'){
        a[1]=2;
        
    }
    
    else if(req.method=='DELETE'){
        a.pop();
       
    }
    res.write(JSON.stringify(a));
   res.end();

}

server.listen(3000,function(){
console.log("server started");
});


