const http=require('http');
const fs=require('fs');
const path=require('path');
const port=3000;

const server=http.createServer((req,res)=>{
    const filepath=path.join(__dirname,req.url==='/' ? "index.html": req.url)

    const extName=String(path.extname(filepath).toLowerCase())
    const mimeTypes={
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'png/img',
    }
    const contenttype=mimeTypes[extName]||'application/octet-stream'
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code==="ENOENT"){
                res.writeHead(404,{"content-Type":"text/html"});
                res.end("404: File not found BRuhhh");
            }
        }else{
            res.writeHead(200,{'content-type':contenttype});
            res.end(content,'utf-8');
        }
    })

});
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
