const express = require("express");
const authRoute = express.Router();
const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken");
const crypto = require("bcrypt");
const controller = require("../Controller/user.controller")


// Register API- api/auth/register
authRoute.post("/register",controller.registerUser);


// Login API-api/auth/login
authRoute.post("/login",controller.loginUser);
module.exports = authRoute;