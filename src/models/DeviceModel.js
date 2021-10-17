const { db } = require("../common/db");

class DeviceModel {
  constructor() {
    this.tableName = "device";
    this.idName = "id";
    return db.table(this.tableName);
  }
}
module.exports = DeviceModel;
