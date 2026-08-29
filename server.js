require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const authRouter = require("./router/authRouter");
const dbConnection = require("./config/dbConnection");
const app = express();
app.use(express.json());


app.use("/api/v1/auth", authRouter)


dbConnection()

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
