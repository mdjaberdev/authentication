
const Regis = require("../models/userModel");

const login = async (req, res) => {
 const { email, password, studentId } = req.body;
 const user = await Regis.findOne({email, password, studentId})

 res.send({
    success: true,
    user: user
 })

}

module.exports = { login };