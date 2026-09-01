const mongoose = require("mongoose");
const { applyTimestamps } = require("./post.model");
const followSchema = new mongoose.Schema({
    follower:{
        type:String
    },
    followie:{
        type:String
    },
    status:{
        type:String,
        default:"Pending",
        enum:{
            values:["Pending","Accepted","Rejected"],
            message:"Status can be only Pending, Accepted, Rejected"
        }
    }

    
},{timestamps:true})
const followModel = mongoose.model("Follow",followSchema);
module.exports = followModel;