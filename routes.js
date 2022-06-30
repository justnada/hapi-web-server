const routes = [
  {
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (req, res) => {
      return "403";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, res) => {
      return "About";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, res) => {
      return "403";
    },
  },
  {
    method: "GET",
    path: "/user/{username?}",
    handler: (req, res) => {
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
    handler: (req, res) => {
      return "404";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (req, res) => {
      const { username, password } = req.payload;
      return `Welcome ${username}!`;
    },
  },
];

module.exports = routes;
