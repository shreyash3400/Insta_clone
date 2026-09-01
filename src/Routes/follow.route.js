const express = require('express');
const followRouter = express.Router();
const identifyUser = require("../middleware/identify.middleware")
const followController = require("../Controller/follow.controller")


followRouter.post('/follow/:username',identifyUser,followController.followUser)


followRouter.post("/unfollow/:username",identifyUser,followController.unfollowUser)

module.exports = followRouter