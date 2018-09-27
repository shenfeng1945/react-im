const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') 
const app = express()



app.use(bodyParser.json())
app.use(cors())


app.listen(6060,()=>console.log('localhost:6060'))

