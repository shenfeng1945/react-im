const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/signup', (req, res, next) => {
    const errors = {}
    const { username } = req.body
    const user = {
        username
    }
    User.find({ username }, (err, docs) => {
        if (!docs.length) {
            User(user).save(() => {
                res.status(200).json({ success: true })
            })
        }else{
            errors.username = '用户已存在'
            res.status(400).json(errors)
        }
    })
})

router.post('/search',(req,res,next)=>{
    const { username } = req.body
    User.find({
        $or: [
            {username:{$regex: username}}
        ]
    },(err_docs,docs)=>{
        if(err_docs){
            res.status(400).json({errors: '数据库异常'})
        } 
        res.status(200).json({searchData: docs})
    })
})

module.exports = router