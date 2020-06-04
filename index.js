const http = require('http');
http.createServer( (req, res) => {
    res.writeHead(200, { 
        'Content-Type': 'text/plain',
        //'Content-Length': '',
        'Connection': 'keep-alive',
        'accept': '*/*'});
    res.write("That is fun!");
    res.end();
}).listen(8080);

console.log("Server is running on port 8080.");