import mongoose from 'mongoose'

const { Schema } = mongoose

const Application = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref : 'User',
        required: true
    },
    job:{
        type: mongoose.Types.ObjectId,
        ref : 'Job',
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    portofolio:{
        type: String,
        required: true
    },
    additional_information:{
        type: String
    }
    
})


export default mongoose.model("Application", Application)