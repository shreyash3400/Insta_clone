const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUser(req,res){
    const follower = req.user.username;
    const followie = req.params.username  
    
    if(follower===followie){
        return res.status(409).json({
            message:"You cannot follow yourself"
        })
    }

    const isUserExists = await userModel.findOne({
        username:followie
    })


    if(!isUserExists){
        return res.status(409).json({
            message:"user not exists"
        })
    }

    const isAlreadyFollowing = await followModel.findOne({
        follower,
        followie
    })

    if(isAlreadyFollowing){
        return res.status(200).json({
            message:"You already following that user"
        })
    }

    const follow = await followModel.create({
        follower,
        followie,
        
    })

    res.status(201).json({
        message:"following successfully",
        follow
    })
}

async function unfollowUser(req,res) {
    const follower = req.user.username;
    const followie = req.params.username
    

    const isFollows = await followModel.findOne({
        follower:follower,
        followie:followie
    })
    if(!isFollows){
        return res.status(409).json({
            message:"Your not following that user"
        })
    }

    const unfollow = await followModel.findByIdAndDelete(isFollows._id)

    res.status(200).json({
        message:"Unfollower",
        unfollow
    })
}

module.exports = {
    followUser,
    unfollowUser
}