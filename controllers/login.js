const Regis = require("../models/userModel");

const login = async (req, res) => {
  const { email, password, studentId } = req.body;
  if (!email) {
    return res.send("Please type email");
  }

  if (!password) {
    return res.send("Please type password");
  }

  if (!studentId) {
    return res.send("Please type studentId");
  }

  const user = await Regis.findOne({ studentId });
  if (!user) {
    return res.send({
      success: false,
      message: "User Not Found",
    });
  }
  if (user.email !== email) {
    return res.send("Incorrect email");
  }

  if (user.password !== password) {
    return res.send("Incorrect Password");
  }

  res.send({
    success: true,
    user: user,
  });
};

module.exports = { login };
