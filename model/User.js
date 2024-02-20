import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const { Schema } = mongoose

const User = new Schema({
    username : {
        type: String,
        minlenght: [3, "min required 3 characters"],
        maxlenght: [255, "max characters"],
        required: [true, "username is required"]
    },
    email : {
        type: String,
        minlenght: [3, "min required 3 characters"],
        maxlenght: [255, "max characters"],
        required: [true, "email is required"]
    },
    password : {
        type: String,
        minlenght: [3, "min required 3 characters"],
        maxlenght: [255, "max characters"],
        required: [true, "password is required"]
    }
})

const HASH_ROUND = 10
User.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, HASH_ROUND)
    next()
})
export default mongoose.model("User", User)
