/*

In this example we will create a http web server 
in Node JS. The web server has one cluster master
 process and two worker process. When the app start, 
 the master process will create and initialize the two 
 worker process. And when a http request come to the web 
 server, cluster master process will pick a free worker 
 process ( in round robin order )  to process the request.

*/

// include http & cluster module
//

var http = require('http');
var cluster = require('cluster');

// totally 2 cpu in the machien
// therefore...
var cpu_numbers = 2;

// create web server obj
var server = http.createServer(function(req, res) {
  /*
  For google chrome, 1 url request will gen two requests
  one for...
  "/favicon.io"
  the other for...
  "/"

  need filte rout favicon.io request */

  if (req.url != '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hi from worker process ' + process.pid);
    console.log('Process request worker pid is ' + process.pid);
  }

});

// When the app starts
if (cluster.isMaster) {
  // stdout master pid
  console.log('Master process id ' + process.pid);

  for (var i = 0; i < cpu_numbers; i++) {
    // invoke cluster fok method to CREATE  a cluster worker
    var worker = cluster.fork();
    console.log('Worker ' + (i + 1) + 'process id' + worker.process.pid);
  }
    // online triggered when child worker process is created
    cluster.on('online', function(worker) {
      console.log('A new worker is online, wokrer process id: ' + worker.process.pid);
    });

    // exit event triggered when child worker process is stopped
    cluster.on('exit', function(worker, code, signal) {
      console.log('Worker ' + worker.process.pid + 'exit, status code is ' + code + ' & signal is ' + signal);
      cluster.fork(); // create new child process worker
    });
} else {
  // make server listen on port 8000
  server.listen(8000);
}
