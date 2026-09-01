const jwt = require("jsonwebtoken");

async function identifyUser(req,res,next){
    const token = req.cookies.token;
        let decode
        
        try{
            decode = jwt.verify(token,process.env.JWT);
        }catch(err){
            return res.status(401).json({
                message:"Token invalid"
            })
        }
    req.user = decode
    next()

}
module.exports = identifyUser;