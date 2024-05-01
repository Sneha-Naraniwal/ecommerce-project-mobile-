const http=require("http");
const fs=require("fs");
const port=process.env.PORT || 2000;


const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    
    console.log(req)
    if(req.url==="/"){
        const rr=fs.readFile("index.html",(err,data)=>{
            if(err) {
                res.statusCode=500;
                res.end("ERROR LOADING FILE");
            }
            else{
                res.statusCode=200;
                res.end(data.toString());
            }
        });

    }
})
server.listen(port,()=>{
    console.log("server listening at port"+port);
})