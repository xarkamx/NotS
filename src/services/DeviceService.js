const DeviceModel = require("../models/DeviceModel");

class DevicesService {
  constructor() {
    this.model = new DeviceModel();
  }
  getAll() {
    return this.model.select();
  }
  getById(id) {}
  async create(device) {
    await this.model.insert(device);
    return this.getLatest();
  }
  update(id, device) {}
  getLatest() {
    const model = new DeviceModel();
    return model.select().orderBy("created_at", "desc").first();
  }
  delete(id) {}
}
module.exports = DevicesService;
