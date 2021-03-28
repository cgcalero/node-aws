const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    res.send("<h1>Hello World with Express with HTML!...</h1>")
})

app.listen(3000)

console.log('Server listen on port 3000');