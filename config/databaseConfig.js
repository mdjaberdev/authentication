const mongoose = require("mongoose");
const dbconnection = () => {
  return mongoose
    .connect(
      "mongodb+srv://mdjaber:jhjaber2004@cluster1.gxwb1gq.mongodb.net/todo?appName=Cluster1",
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbconnection;
