require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const { registration } = require("./controllers/registration");
const { login } = require("./controllers/login");
const dbconnection = require("./config/databaseConfig");
const app = express();
app.use(express.json());

app.post("/registration", registration);
app.post("/login", login);

dbconnection()

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
