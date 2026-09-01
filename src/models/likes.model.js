const mongoose = require('mongoose')

const likesSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:[true]
    },
    username:{
        type:String,
        require:[true]
    }
})
const likesModel = mongoose.model("like",likesSchema)

module.exports = likesModel