const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    res.send("Hello World with Express!...")
})

app.listen(3000)

console.log('Server listen on port 3000');