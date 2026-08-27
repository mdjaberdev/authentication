require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const dbconnection = require("./config/databaseConfig");
const app = express();
app.use(express.json());



dbconnection()

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
