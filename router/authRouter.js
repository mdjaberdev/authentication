const express = require("express");
const { login } = require("../controllers/login");
const { registration } = require("../controllers/registration");

const router = express.Router();

router.post("/registration", registration);
router.post("/login", login);