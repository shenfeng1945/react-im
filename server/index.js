const express = require('express')
const users = require('./routes/users')
const cors = require('cors')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://shenfeng1945:shenfeng1945@ds239911.mlab.com:39911/reac-im',(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('mongodb has been connected')
    }
})


app.use(bodyParser.json())
app.use(cors())

app.use('/api/users',users)

app.listen(6060,()=>console.log('localhost:6060'))

