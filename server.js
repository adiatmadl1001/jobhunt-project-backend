import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import authRouter from './router/auth.js'
import privateRouter from './router/private.js'
import { decodeToken } from './middleware/auth.js'

const app = express()
const port = 8000
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/jobhunt')
const resDB = mongoose.connection
resDB.on('error',(err) => console.log(err))
resDB.once('open',() =>console.log('success'))


app.use(bodyParser.json())

app.use('/',authRouter)

app.use((req, res, next) => {
    decodeToken(req, res, next)
})

app.use('/',privateRouter)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})