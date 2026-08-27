const Regis = require("../models/userModel");

const registration = async (req, res) => {
  try {
    const { userName, email, password, studentId } = req.body;

    if (!userName || !email || !password || !studentId) {
      return res.status(400).json({
        success: false,
        message: "Please fill the all fields",
      });
    }

    const regis = new Regis({
      userName: userName,
      email: email,
      password: password,
      studentId: studentId,
    });

    await regis.save();

    return res.status(201).json({
      success: true,
      message: `Add ${userName}`,
      detels: {
        id: regis._id,
        userName: regis.userName,
        email: regis.email,
        studentId: regis.studentId,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { registration };
