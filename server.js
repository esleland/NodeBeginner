// server.js
// Server module for node beginner's guide web application

// include http and url modules
var http = require("http");
var url = require("url");

// function to start the server
function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request);
	}	
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started. Cool yer fuckin jets, Jerko.");
}

exports.start = start;
