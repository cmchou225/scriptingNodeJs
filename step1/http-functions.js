const https = require("https");

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

module.exports = function getHTML (options, callback ) {

  https.get(options, (response) => {

    let buffChunk = "";

    response.setEncoding('utf8');

    response.on('data', (data) => {
      buffChunk += data;
    });

    response.on('error', (err) => console.error(err));

    response.on('end', () => callback(buffChunk));

    response.on('finish', () => console.log('Request Finished'));

  });

};

function printHTML (html) {
  console.log(html);
}

//getAndPrintHTML(requestOptions, printHTML);