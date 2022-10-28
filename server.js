const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js</h1>");
    response.write("<h2>Justin Smith - t87g863</h2>/
                   <p>Running node server on port 3067</p>");
    response.end();
}).listen(3067);
