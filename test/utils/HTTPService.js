const request = require('request-promise-native');

const { INTEGRATION_TESTS } = require('../../resources/envs/local');

class HTTPService {
  constructor() {
    /**
     * Generates an option object used by the request package
     * @param {*} app the targeted app object
     */
    const generateOption = (app) => {
      const opt = {
        // Build the uri to request our own api
        uri: `${app.PROTOCOL}://${app.HOST}:${app.PORT}/`,
        rejectUnauthorized: false,
      };
      return opt;
    };

    this.options = generateOption(INTEGRATION_TESTS);
  }

  /**
   * get All records
   * @returns {Promise<*>} the sent request to the server
   */
  getAllParkings() {
    return request.get(this.options);
  }

  /**
   * get record by ID
   * @param {*} recordid the id of the requested record
   * @returns {Promise<*>} the sent request to the server
   */
  getParkingByRecordID(recordid) {
    const { ...option } = this.options;
    option.uri += INTEGRATION_TESTS.PARAM;
    option.uri += recordid;
    return request.get(option);
  }
}

module.exports = HTTPService;
