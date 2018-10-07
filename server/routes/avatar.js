const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/:avatar',(req,res,next)=>{
    const avatar = req.params.avatar
    fs.readFileSync(__dirname+'/'+avatar,(err,data)=>{
       res.writeHead(200,{'Content-Type':'image/jpeg'})
    //    res.write(data, 'binary');
       console.log(data)
       res.end(data)
    })
})

module.exports = router