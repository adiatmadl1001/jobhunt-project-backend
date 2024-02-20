const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

app.use((req,res,next) =>{
    console.log("Middleware")
    next()
})

app.get('/', (req, res) => {
    const data = {
        method:"GET",
        body: req.query
    }
    res.send(data)
})

app.get('/kedua', (req, res) => {
    res.send("get kedua")
})

app.post('/', (req, res) => {
    res.send("post")
})

app.put('/', (req, res) => {
    res.send("put")
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})