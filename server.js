require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const dbconnection = require("./config/databaseConfig");
const authRouter = require("./router/authRouter")
const app = express();
app.use(express.json());


app.use("/api/v1/auth", authRouter)
dbconnection()

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
