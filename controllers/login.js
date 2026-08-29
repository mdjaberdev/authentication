const Regis = require("../models/userModel");

const login = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Fields required",
      });
    }

    const existingUser = await Regis.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (existingUser.otp !== otp) {
      await Regis.findOneAndDelete({ email: email });
      return res.status(200).json({
        success: false,
        message: "User deleted",
      });
    }

    if (existingUser.otp == otp) {
      await Regis.findOneAndUpdate({ email: email }, { otp: "" });
      return res.status(200).json({
        success: true,
        message: "Login Successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { login };
