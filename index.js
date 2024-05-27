const server = require('http');
const fileSystem = require('fs')

server.createServer(function(req,res) {
    fileSystem.readFile('index.html', function(err, data) {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(data)
        res.end()
    })
}).listen(3000);