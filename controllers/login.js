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

  const user = await Regis.findOne({ email, password, studentId });
  if (!user) {
    return res.send({
      success: false,
      message: "User Not Found",
    });
  }

  res.send({
    success: true,
    user: user,
  });
};

module.exports = { login };
