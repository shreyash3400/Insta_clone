const likesModel = require("../models/likes.model")

async function like(req,res){
    const postId = req.params.postId;
    const username = req.user.username;

    const like = await likesModel.create({
        postId,
        username
    })

    res.status(200).json({
        message:"Post liked Successfully",
        like
    })
}



module.exports = {
    like,
}