import Job from "../model/Job.js"

export const createJob = async(req,res) => {
    const newJob = await Job({
        name: req.body.name,
        agency: req.body.agency,
        category: req.body.category,
        skill: req.body.skill
    })
    newJob.save()
    res.send('job created')
}

export const jobDetails = async(req, res) => {
    const jobInfo = await Job.find().exec()
    res.send(jobInfo)
}

export const updateJob = async(req, res) => {
    await Job.updateOne({_id: req.body.id}, {name: req.body.name})
    const newUpdateJob = await Job.findOne({_id: req.body.id})
    res.send({msg:'update successful', data: newUpdateJob})
}

export const deleteJob = async(req, res) =>{
    await Job.deleteOne({_id: req.body.id})
    res.send({msg:'delete successful', _id:req.body.id})
}

export const getJobById = async(req, res) => {
    const findJobById = await Job.findById(req.params.id).exec()
    res.send(findJobById)

}