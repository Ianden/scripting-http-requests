var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

let printLowerCase = function(buff) {
	console.log(buff.split('').reverse().join(''));
};

getHTML.getHTML(requestOptions, printLowerCase);
