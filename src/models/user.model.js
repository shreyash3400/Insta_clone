const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/Shreyash3400/Default.webp",
    },
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel