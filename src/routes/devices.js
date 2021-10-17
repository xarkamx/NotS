const DeviceController = new require("../controllers/DeviceController");
const device = new DeviceController();
module.exports = function (fastify, opts, next) {
  const path = "/devices";
  fastify.get(
    path,
    {
      schema: {
        tags: ["devices"],
      },
    },
    device.index
  );
  fastify.post(
    path,
    {
      schema: {
        tags: ["devices"],
        body: {
          type: "object",
          properties: {
            firebase_token: {
              type: "string",
            },
          },
          required: ["firebase_token"],
        },
      },
    },
    device.create
  );
  next();
};
