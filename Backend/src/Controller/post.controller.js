const postModel = require("../models/post.model");
const imageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs");
require('dotenv').config()
const cookie = require("cookie-parser");
const jwt = require("jsonwebtoken")




async function postAPI(req,res){

    const client =  new imageKit({
        privateKey:process.env.IMAGE_PRIVATE_KEY,
    })
    
    const file =await client.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),"file"),
        fileName:"Image",
        folder:"Insta_clone"

    })
    const post = await postModel.create({
        caption:req.body.caption,
        img:file.file,
        user:req.user.id,
    })
    res.status(201).json({
        message:"Post Uploaded Successfully",
        post
    })
}


async function getPostController(req,res){

    const post  = await postModel.find({
        user:req.user.id
    });

    res.status(200).json({
        message:"Post Fetched Successfully",
        post
    })
}


async function getPostDetailsController(req,res){

    const user_Id = req.user.id;
    const post_Id = req.params.postId;

    const user_Post = await postModel.findById(post_Id);

    
    if(!user_Post){
        return res.status(401).json({
            message:"Post not found"
        })
    }
    const isUserExist = user_Post.user.toString() ===user_Id
    if(!isUserExist){   
        return res.status(401).json({
            message:"Unable to access that post"
        })
    }


    res.status(200).json({
        message:"Post Fetched",
        user_Post
    })


}
module.exports = {
    postAPI,
    getPostController,
    getPostDetailsController,
}