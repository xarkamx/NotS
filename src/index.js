const fastify = require("fastify")();
const swagger = require("./swagger");
const autoload = require("fastify-autoload");
fastify.register(require("fastify-cors"));

fastify.register(require("fastify-swagger"), swagger);
fastify.register(autoload, {
  dir: __dirname + "/routes",
  options: {
    prefix: "/api/v1",
  },
});

fastify.ready((err) => {
  if (err) throw err;
  fastify.swagger();
});
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
