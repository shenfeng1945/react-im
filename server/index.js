const express = require('express')
const users = require('./routes/users')
// const avatar = require('./routes/avatar')
const cors = require('cors')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
const https = require('https')
const fs = require('fs')
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
// app.use(express.static('public'));

app.use('/api/users',users)
// app.use('/public/uploadImg',avatar)

const key = fs.readFileSync('/etc/letsencrypt/live/shenfeng1945.xyz/privkey.pem','utf8');
var cert = fs.readFileSync('/etc/letsencrypt/live/shenfeng1945.xyz/cert.pem','utf8');
var options = {
    key: key,
    cert: cert
};

// app.listen(6060,()=>console.log('localhost:6060'))
https.createServer(options,app).listen(6061);

