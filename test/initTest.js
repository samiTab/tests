const { before, after } = require('mocha');

const PExplorerAPI = require('../api/api.js');
const { INTEGRATION_TESTS } = require('../resources/envs/local.json');

const pexplorer = new PExplorerAPI();

// Here we use the 'function' keyword because we need to use the timeout function
// eslint-disable-next-line prefer-arrow-callback
before(async function beforeTest() {
  this.timeout(50000);

  try {
    pexplorer.startServer(INTEGRATION_TESTS.HOST, INTEGRATION_TESTS.PORT);
  } catch (error) {
    if (!error) {
      throw new Error('Could not start the server at %s:%s', INTEGRATION_TESTS.HOST, INTEGRATION_TESTS.PORT);
    }
  }
});

require('./testAPI');

after(() => {
  pexplorer.stopServer();
});
