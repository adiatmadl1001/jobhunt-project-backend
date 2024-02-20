import express from 'express'
import { signin,register } from '../controller/user.js'
const router = express.Router()
router.post('/signin',signin)
router.post('/signup',register)

export default router