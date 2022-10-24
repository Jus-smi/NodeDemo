const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js</h1>");
    response.write("<h2>this</h2>")
    response.end();
}).listen(3067);