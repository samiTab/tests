const { describe, it } = require('mocha');
const { expect } = require('chai');
const HTTPService = require('./utils/HTTPService');

const httpService = new HTTPService();

const SECOND = 1000;

// we disable eslint here, to allow the following chai expression
// eslint-disable-next-line no-unused-expressions
describe('Parking Explorer API related tests', function tests() {
  this.slow(5 * SECOND);

  describe('Get All tests', async () => {
    it('Should retrieve all records', async () => {
      const result = await httpService.getAllParkings();
      const jsonResult = JSON.parse(result);
      // we disable eslint here, to allow the following chai expression
      // eslint-disable-next-line no-unused-expressions
      expect(jsonResult).not.to.be.null;
      // we disable eslint here, to allow the following chai expression
      // eslint-disable-next-line no-unused-expressions
      expect(jsonResult.records).not.to.be.empty;
      expect(jsonResult.records.length).to.be.greaterThan(1);
    });
  });

  describe('Get parking by recordid', () => {
    it('Should retrieve one record by its recordid', async () => {
      // parse result to find the first record's id
      let result = await httpService.getAllParkings();
      let jsonResult = JSON.parse(result);
      const { recordid } = jsonResult.records[0];
      // request for one record by its recordid
      result = await httpService.getParkingByRecordID(recordid);
      jsonResult = JSON.parse(result);
      // we disable eslint here, to allow the following chai expression
      // eslint-disable-next-line no-unused-expressions
      expect(jsonResult).not.to.be.null;
      expect(jsonResult.recordid).not.to.be.deep.equal(recordid);
    });
  });
});
