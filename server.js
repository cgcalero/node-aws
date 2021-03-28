const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    res.send("<h1>Hello World. Express with HTML on port 8080!...</h1>")
})

app.listen(8080)

console.log('Server listen on port 8080');