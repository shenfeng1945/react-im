const express = require('express')
const User = require('../models/user')
const upload = require('../middleware/multer')
const router = express.Router()
const IpUrl = 'https://shenfeng1945.cn/react-im/server/public'

router.post('/signup', (req, res, next) => {
    const errors = {}
    const { username } = req.body
    const user = {
        username,
        avatar: ''
    }
    User.find({ username }, (err, docs) => {
        if (!docs.length) {
            User(user).save(() => {
                res.status(200).json({ success: true })
            })
        } else {
            errors.username = '用户已存在'
            res.status(400).json(errors)
        }
    })
})

router.post('/search', (req, res, next) => {
    const { username } = req.body
    User.find({
        $or: [
            { username: { $regex: username } }
        ]
    }, (err_docs, docs) => {
        if (err_docs) {
            res.status(400).json({ errors: '数据库异常' })
        }
        res.status(200).json({ searchData: docs })
    })
})

router.get('/avatar/:name', (req, res, next) => {
    const { name } = req.params;
    User.find({ username: name }, (err_doc, docs) => {
        if (docs.length) {
            res.status(200).json(docs[0])
        }else{
            res.status(404).json({error: '未找到'})
        }
    })
})
router.post('/avatar', upload.single('avatar'), (req, res, next) => {
    const url = IpUrl + '/uploadImg/' + req.file.filename
    const name = req.body.username
    User.updateOne({username:name},{avatar:url},(err_up,doc_up)=>{
        if(err_up){
            res.status(400).json({error: '更新失败'})
        }else{
            User.find({username: name},(err_f,doc_f)=>{
               res.status(200).json(doc_f[0])
            })
        }
    })
})

module.exports = router