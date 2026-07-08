require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const mongoose = require("mongoose");
const { registration } = require("./controllers/registrationController");
const { login } = require("./controllers/loginController");
const app = express();
app.use(express.json());


app.post("/registration", registration);
app.get("/login", login);

mongoose
  .connect(
    "mongodb+srv://mdjaber:jhjaber2004@cluster1.gxwb1gq.mongodb.net/todo?appName=Cluster1",
  )
  .then(() => {
    console.log("Database Connected");
  });

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
