import User from "../model/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { getToken } from "../middleware/auth.js"

export const profile = async(req,res) => {
    let token = getToken(req)
    var veryfiToken = jwt.verify(token,"secret")
    const user = await User.findById(veryfiToken.data).exec()
    return res.send({msg:"Profile",data:user})
}

export const signin = async (req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email: email}).exec()
    if(user){
        const compare = bcrypt.compare(password, user.password).then(function(result){
            return result
        })
        if(compare){
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user.id
              }, 'secret')
            return res.send({msg:"signin success", token: token})  
        }
    }
    return res.status(404).json({msg:"user not found"})
}

export const register = async (req,res) => {
    const { username, email,  password } = req.body
    const user = await User.create({ username, email, password })
    await user.save()
    if(user){
        res.send({msg:'Register success', status: 200, succes: true})

    } else{
        return err

    }
}