var http=require('http');
var fs = require('fs');

http.createServer(function(request,response){
   console.log('starting copy');
   var fileSize = request.headers['content-length'];
   var fileUpload =0;
   console.log(fileSize)
   var newFile = fs.createWriteStream('copy.log');
   request.pipe(newFile);
    request.on('data',function(chunk){
        fileUpload+= chunk.length;
        var progress = (fileUpload / fileSize) * 100;
        response.write('progress: ' + parseInt(progress)+'%\n');
    });
   request.on('end',function(){
       response.end('file uploated!!');
       console.log('finished copy');
   });
}).listen(8080);
console.log('server waiting');
