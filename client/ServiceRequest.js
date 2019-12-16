class ServiceRequest {
  // build ServiceRequest to perform requests to the source api
  constructor(options, id) {
    this.sr = {
      ...options,
    };
    this.recordid = id;
  }

  // get all records: no filter is applied.
  getAll() {
    const { ...srCopy } = this.sr;
    return srCopy;
  }

  /**
   * retrieve only the specified record
   */
  getByRecordID() {
    // use a copy of the sr object to don't modify the original
    const { ...srCopy } = this.sr;
    srCopy.uri += `&refine.recordid=${this.recordid}`;
    return srCopy;
  }
}


module.exports = ServiceRequest;
