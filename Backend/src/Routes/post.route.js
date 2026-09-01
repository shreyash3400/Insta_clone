const express = require("express")
const postRoute = express.Router();
const postController = require("../Controller/post.controller")
const multer = require('multer');
const upload = multer({storage:multer.memoryStorage()});
const identifyUser = require("../middleware/identify.middleware")


postRoute.post("/",upload.single("image"),identifyUser,postController.postAPI);

postRoute.get("/details",identifyUser,postController.getPostController);

postRoute.get('/details/:postId',identifyUser,postController.getPostDetailsController);
module.exports = postRoute