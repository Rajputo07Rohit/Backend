require('dotenv').config()
const express = require('express')
const app = express()
const port = 5500

app.get('/',(req,res) => {
    res.send('hello world!')
})

app.get('/twitter',(req,res) => {
    res.send("hello twitter")
})

app.get('/login', (req,res) =>{
   res.send('<h1>please login at backend </h1>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>please login at youtube </h2>')
 })

app.listen(process.env.PORT,() => { 
     onsole.log(`exmaple app listing on port ${port}`)
    
})  