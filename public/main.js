const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  var path;
  if(req.url === '/') {
    path = '/index.html';
  } else {
    path = req.url;
  }

  path = path.replace('?v=4.7.0', '');

  const filePath = './public' + path;
  fs.readFile(filePath, function(err, data) {
    if(err) {
      console.log(err.message);
      res.statusCode = 404;
      res.end('No File Found');
    } else {
      res.statusCode = 200;
      res.end(data);
    }
  });
}).listen(3001, function() {
  console.log('server is running.');
});
