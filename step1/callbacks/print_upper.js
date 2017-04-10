const https = require('https');
const getPrint = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

const upper = (string) => {
  console.log(string.toUpperCase());
}

getPrint(requestOptions, upper);