const DevicesService = require("../services/DeviceService");

class DeviceController {
  async index(req, rep) {
    const service = new DevicesService();
    const data = await service.getAll();
    rep.send(data);
  }
  show(req, rep) {
    const id = req.params.id;
    const data = service.getById(id);
    rep.send(data);
  }
  async create(req, rep) {
    const data = req.body;
    const service = new DevicesService();
    const result = await service.create(data);
    rep.send(result);
  }
  delete(req, rep) {
    const id = req.params.id;
    const result = service.delete(id);
    rep.send(result);
  }
  update(req, rep) {
    const id = req.params.id;
    const data = req.body;
    const result = service.update(id, data);
    rep.send(result);
  }
}
module.exports = DeviceController;
