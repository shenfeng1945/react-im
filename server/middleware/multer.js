const multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/uploadImg')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})
var upload = multer({storage})
module.exports = upload;