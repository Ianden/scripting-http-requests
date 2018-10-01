var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

let printLowerCase = function(buff) {
	console.log(buff.toLowerCase());
};

getHTML.getHTML(requestOptions, printLowerCase);
