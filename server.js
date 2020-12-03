const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: "./build",
});

const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

server.use(middlewares);

const users = router.db.get("users");

/** Authorization **/
server.get("/authorization/login=:login/password=:password", (req, res) => {
  const user = users.find((item) => item.login === req.params.login);
  const password = user.toJSON().password;
  return password === req.params.password
    ? res.json(user)
    : res.json();
});

server.use(router);

server.listen(process.env.PORT || 3005, function () {
  console.log("JSON Server is running");
});
