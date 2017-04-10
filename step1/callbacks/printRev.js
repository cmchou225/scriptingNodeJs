const https = require('https');
const getPrint = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

const reverse = (string) => {
  console.log(string.split('').reverse().join(''));

};

getPrint(requestOptions, reverse);