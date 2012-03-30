// router.js
// Routes incoming URL requests appropriately (start vs. upload I think).

function route(handle, pathname, response, request) {
	console.log("Finna route a request for " + pathname + " inna sec.");
	
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, request);
	} else {
		console.log("Couldn't find the path " + pathname + " yo.");
		response.writeHead(404, {"Content-Type": "text/plain"})
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
