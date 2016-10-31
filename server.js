const http = require('http');
const fs = require('fs');

const todos = [{title: 'todo1', checked: false}, {title: 'todo2', checked: true}, {title: 'todo3', checked: false}];

http.createServer(function(req, res) {

  var path;
  if(req.url === '/') {
    path = '/index.html';
  } else {
    path = req.url;
  }

  const filePath = './public' + path;

  fs.exists(filePath, function(exists) {
    if(exists) {
      fs.readFile(filePath, function(err, data) {
        if(err) {
          console.log(err.message);
          res.statusCode = 500;
          res.end('There was an error');
        } else {
          res.statusCode = 200;
          res.end(data);
        }
      });
    } else {
      if(req.method === 'GET') {
        if(path === '/gettodos') {
          res.writeHeader(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(todos));
        }
      }
    }
  });

}).listen(3001, function() {
  console.log('server is running.');
});
