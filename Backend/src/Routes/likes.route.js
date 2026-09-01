const express = require("express")
const likesRouter = express.Router();
const identifyUser = require("../middleware/identify.middleware")
const likesController= require("../Controller/likes.controller")

likesRouter.post('/:postId',identifyUser,likesController.like)

module.exports = likesRouter