import express from 'express'
import { profile } from '../controller/user.js'
import { createApp, myApp } from '../controller/application.js'
import { createJob, deleteJob, getJobById, jobDetails, updateJob } from '../controller/job.js'

const router = express.Router()
router.post('/profile',profile)
router.post('/create-applications',createApp)
router.post('/create-job',createJob)
router.post('/update-job',updateJob)
router.post('/delete-job',deleteJob)
router.get('/my-application',myApp)
router.get('/job-details',jobDetails)
router.get('/job/:id', getJobById)


export default router