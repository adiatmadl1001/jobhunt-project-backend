import Application from '../model/Application.js'

export const myApp = async(req,res)=> {
    const findUserApp = await Application.find({user: req.user._id}).populate(['user','job']).exec()
    res.send({msg:"your Application", data:findUserApp})
}

export const createApp = async(req,res)=> {
    const userDataApplication = await Application({
        user: req.user._id,
        job: req.body.job,
        linkedin: req.body.linkedin,
        portofolio: req.body.portofolio,
        additional_information: req.body.additional_information ? req.body.additional_information : ''
    })
    await userDataApplication.save()
    res.send({msg:"Application created"})
}