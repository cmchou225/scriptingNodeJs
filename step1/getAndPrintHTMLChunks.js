const https = require("https");

function getAndPrintHTMLChunks(){

  const requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (response) =>{

    response.setEncoding('utf8');

    response.on('data', (data) => {
      console.log(`${data} \n`);
    });

    response.on('error', (err) => {
      console.error(err);
    });

    response.on('end', () => {
      console.log('Response stream complete');
    });

    response.on('finish', () => {
      console.log('Request finished');
    });

  });

}

getAndPrintHTMLChunks();