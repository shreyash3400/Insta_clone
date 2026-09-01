const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken");
const crypto = require("bcrypt");
const cookie = require("cookie-parser")
async function registerUser (req,res){const {username,email,password,bio,profileImage}= req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or:[{
            email,

        },
        {username}]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"This user is already existed",
        })
    }
    const hashPassword = await crypto.hash(password,10);
    const user = await userModel.create({
        username,
        email,
        password:hashPassword,
        bio,
        profileImage
    })

    const token = jwt.sign(
        {
            id:user._id ,
            username:isUserAlreadyExists.username
        },
        process.env.JWT,
        {expiresIn:"1d"}
    )

    res.cookie('token',token)

    res.status(201).json({
        message:"User Registratin Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        },
        token
    })
}

async function loginUser(req,res){
    const {username,email,password} = req.body;

    const isUserExists = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })
    
    if(!isUserExists){
        return res.status(409).json({
            message:"User not found"
        })
    }
    const isPassCorrect = await crypto.compare(password,isUserExists.password);

     if(!isPassCorrect){
       return res.status(409).json({
            message:"Password invalid"
        })
     }

     const token = jwt.sign(
        {
            id:isUserExists.id,
            username:isUserExists.username
        },
        process.env.JWT,
        {expiresIn:"1d"}
     )

     res.cookie("token",token)

     res.status(200).json({
        message:"User Logined",
        token
     })
}

module.exports = {
    registerUser,
    loginUser
}