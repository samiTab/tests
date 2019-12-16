const PExplorerAPI = require('./api');

// create the server responsible of exposing our API
const pexplorer = new PExplorerAPI();

// start the server and expose the API
pexplorer.startServer();
