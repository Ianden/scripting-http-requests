let https = require('https');

function getAndPrintHTML(options) {

	let buffer = "";

	// notice that https.get takes a callback with one parameter -
	// response, which is a Stream that represents the HTTP response
	https.get(options, function (response) {

	  // set encoding of received data to UTF-8
	  response.setEncoding('utf8');

  	// the callback is invoked when a `data` chunk is received
  	response.on('data', function (data) {
    	buffer += data;
  	});

  	// the callback is invoked when all of the data has been received
  	// (the `end` of the stream)
  	response.on('end', function() {
    	console.log(buffer);
  	});
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
