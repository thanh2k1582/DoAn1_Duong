const studentDB = require('../../model/studentDB.js')
const teacherDB = require('../../model/teacherDB.js')
const {mutipleMongooseToObject} = require('../../../util/mongoose.js')					
class AdminController{
    index(req,res){
        res.render('admin/admin')
    }
    confirm(req,res,next){
        teacherDB.find()
            .then(members => res.render('admin/confirmRequire',{		
                members : mutipleMongooseToObject(members),
                helpers:{
                    sum : (a,b) => a+b,
                }						
            }))
            .catch(next)
        studentDB.find()
            .then(member => res.render('admin/confirmRequire',{		
                member : mutipleMongooseToObject(member),
                helpers:{
                    sum : (a,b) => a+b,
                }						
            }))
            .catch(next)
        
    }
}
module.exports = new AdminController