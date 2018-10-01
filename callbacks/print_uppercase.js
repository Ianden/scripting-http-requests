var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

let printUpperCase = function(buff) {
	console.log(buff.toUpperCase());
};

getHTML.getHTML(requestOptions, printUpperCase);
