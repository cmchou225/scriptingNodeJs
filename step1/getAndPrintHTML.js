const https = require("https");

function getAndPrint() {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (response) => {
    let buffChunk = "";

    response.setEncoding('utf8');

    response.on('data', (data) => {
      buffChunk += data;
    });

    response.on('error', (err) => console.error(err));

    response.on('end', () => console.log(buffChunk));

    response.on('finish', () => console.log('Request Finished'));

  });

}

getAndPrint();