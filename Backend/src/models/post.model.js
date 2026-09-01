const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    img:{
        type:String,
        require:[true,'To post image is required']
    },
    user:{
        ref:"user",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'user is required to creating a post']
    }
})
const postModel = mongoose.model('post',postSchema);

module.exports = postModel;