const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 8888,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server started on ${server?.info?.uri}`);
};

init();
