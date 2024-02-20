import jwt from "jsonwebtoken"
import User from "../model/User.js"

export const getToken = (req) =>{
    let token = req.headers.authorization ? req.headers.authorization.replace("Bearer " ,"") : null
    return token && token.length ? token : null
}

export const decodeToken = async(req,res,next) =>{
    try{
        let token = getToken(req)
        if(!token){
            return res.send({msg:"authentication failed"})
        }
        var veryfiToken = jwt.verify(token,"secret")
        const user = await User.findById(veryfiToken.data).exec()
        if(user) {
            req.user = user
            return next()
        }
    }catch(error){
        return res.send({msg:error.message})
    }
}