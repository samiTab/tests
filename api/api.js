const express = require('express');
const rp = require('request-promise-native');
const ServiceRequest = require('../client/ServiceRequest.js');
const options = require('../resources/config/OPTIONS.json');
const { SERVER } = require('../resources/envs/local.json');

const app = express();

let requestOptions;

class PExplorerAPI {
  /**
   * Create a server exposing the server api
   */
  startServer(host = SERVER.HOST, port = SERVER.PORT) {
    // handle the api root path by retrieving and sending all the parkings
    app.get('/', (req, res) => {
      // parse url request and extract the recordid param value
      const filter = req.query.recordid;
      let sr;
      if (filter) {
        // if filter is not null, get only the requested parking by id
        sr = new ServiceRequest(options.API_CONFIG, filter);
        requestOptions = sr.getByRecordID();
      } else {
        sr = new ServiceRequest(options.API_CONFIG);
        requestOptions = sr.getAll();
      }

      /* retrieve the requested data from the api resource,
      * and send the result/error to the original client,
      */
      rp(requestOptions)
        .then((parsedBody) => {
          res.send(parsedBody);
        })
        .catch((err) => {
          res.send(err);
        });
    });

    // start the server and listen requests on the corresponding port
    this.server = app.listen(port, host, () => {
      // eslint-disable-next-line no-console
      console.log('app listening at http://%s:%s', host, port);
    });
  }

  /**
   * Stop the temporary server
   */
  stopServer() {
    if (this.server) {
      this.server.close();
    }
  }
}

module.exports = PExplorerAPI;
