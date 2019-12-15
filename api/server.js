const app     = express();
const rp      = require('request-promise-native');
const ServiceRequest = require('../client/ServiceRequest.js');
const options = require('../resources/config/OPTIONS.json');
const { SERVER } = require('../resources/envs/local.json');


let requestOptions = undefined;

// handle the api root path by retrieving and sending all the parkings
app.get('/', (req, res) => {
    // parse url request and extract the recordid param value
    const filter = req.query.recordid;

    if(filter != undefined) {
        // if filter is not null, get only the requested parking by id
        console.log('filter is: %s', filter);
        sr = new ServiceRequest(options.API_CONFIG, filter);
        requestOptions = sr.getByRecordID();
    } else {
        console.log('filter is undefined');
        const sr = new ServiceRequest(options.API_CONFIG);
        requestOptions = sr.getAll();
    }

    /* retrieve the requested data from the api resource, 
     * and send the result/error to the original client,  
     */
    rp(requestOptions)
    .then(parsedBody => {
        console.log("status = "+res.statusCode);
        res.send(parsedBody);
    })
    .catch(err => {
        console.error(err);
        res.send(err);
    }) 

});

// start the server and listen requests on the corresponding port
const server = app.listen(SERVER.PORT, SERVER.HOST, () => {
   
    console.log("Example app listening at http://%s:%s", SERVER.HOST, SERVER.PORT)
});