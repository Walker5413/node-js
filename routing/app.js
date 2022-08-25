const http = require('http');
const fs = require('fs');
// ***serving json data to node

const server = http.createServer((req, res) => {
    // ***routing
   
    // res.writeHead(200, {'content-Type': 'application/json'});
   
    // console.log(req.url);
   
    // const person = {
    //     name: 'alex',
    //     email: 'alex@gmail.com',
    //     job: 'designer'
    // };
    
    // res.end(JSON.stringify(person));
    //
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/about-me'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');




