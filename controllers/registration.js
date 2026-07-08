const Regis = require("../models/userModel");

const registration = async (req, res) => {
  const { userName, email, password, studentId } = req.body;

  if (!userName || !email || !password || !studentId) {
    return res.send({
      success: false,
      message: "Please fill the all feilds",
    });
  }

  const regis = new Regis({
    userName: userName,
    email: email,
    password: password,
    studentId: studentId,
  });

  await regis.save();

  res.send({
    success: true,
    message: `Add ${userName}`,
    detels: {
      id: regis._id,
      userName: regis.userName,
      email: regis.email,
      studentId: regis.studentId,
    },
  });
};

module.exports = { registration };
