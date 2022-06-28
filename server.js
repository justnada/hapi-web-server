const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 8888,
    host: "localhost",
  });

  await server.start();
  console.log(`Server started on ${server?.info?.uri}`);
};

init();
