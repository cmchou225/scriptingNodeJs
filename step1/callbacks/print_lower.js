const https = require('https');
const getPrint = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

const lower = (string) => {
  console.log(string.toLowerCase());
}

getPrint(requestOptions, lower);