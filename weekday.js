var http = require("http")

http.createServer(function (request, response) {
//Change for file
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as string below
   response.end('Weekdays: M T W Th F - Server to test conf files\n')
}).listen(3333)

// Console will print the message
console.log('Server running')
