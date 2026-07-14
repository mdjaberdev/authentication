const Regis = require("../models/userModel");

const login = async (req, res) => {
  try {
    const { userName, email, password, studentId } = req.body;
    if (!email) {
      return res.status(400).json("Please type email");
    }

    if (!password) {
      return res.status(400).json("Please type password");
    }

    if (!studentId) {
      return res.status(400).json("Please type studentId");
    }

    const user = await Regis.findOne({ userName });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found",
      });
    }
    if (user.email !== email) {
      return res.status(400).json("Incorrect email");
    }

    if (user.password !== password) {
      return res.status(400).json("Incorrect Password");
    }
    if (user.studentId !== studentId) {
      return res.status(400).json("Incorrect studentId");
    }

    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { login };
