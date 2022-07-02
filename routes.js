const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      const response = h.response("Homepage");
      response.header("Nda", "Love u");
      response.code(200);
      return response;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "403";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "About";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "403";
    },
  },
  {
    method: "GET",
    path: "/user/{username?}",
    handler: (req, h) => {
      const { username = "stranger" } = req.params;
      const { lang } = req.query;

      if (lang === "id") {
        return `hello ${username}`;
      }

      return "Masukin lang";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return "404";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
      const { username, password } = req.payload;
      return `Welcome ${username}!`;
    },
  },
];

module.exports = routes;
