import mongoose from 'mongoose'

const { Schema } = mongoose

const Job = new Schema({
    name:{
        type: String,
        required: true
    },
    agency: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    }
})


export default mongoose.model("Job", Job)