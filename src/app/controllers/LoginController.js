const loginAccount = require('../model/loginDB')

class LoginController{
    login(req,res){
        res.render('register_login/login');
    }
    submit(req,res){
        var email = req.body.email;
        var password = req.body.password;
        loginAccount.findOne({email:email},function(err,docs){
            if (err){
                console.log(err)
            }
            else{
                if(docs == null){
                    res.json("email không tồn tại")
                    return;
                }
                if(docs.mk !== password){
                    res.json("mật khẩu không đúng")
                    // docs.email.value() = req.body.email;
                    return ;
                }
                res.cookie('userID',docs._id)
                res.cookie('mssv',email)
                res.cookie('chucvu',docs.chucvu)
                if(docs.chucvu == "4"){
                    res.redirect('/student')
                    return;
                }
                if(docs.chucvu == "3"){
                    res.redirect('/teacher')
                }
            }
        })
        
        
        // res.redirect('/student')
                            // loginAccount.find({email:req.body.email , mk:req.body.password},function(err,loginAccount){
                            //     if(!err) {
                            //         // res.send("hhello")
                            //         res.redirect('/student')
                            //         return;
                            //     }
                            //     res.status(400).json({error: 'lỗi'});
                            //     })
    }
}
module.exports = new LoginController;
// if(loginAccount.email == req.body.email){
//     if(loginAccount.mk == req.body.mk){
//         res.render('student');
//         return ;
//     }
//     else {
//         res.status(400).json({error: 'lỗi sai mật khẩu'});
//     }
// }
// else {
//     res.status(400).json({error: 'lỗi sai email'});
//     console.log(req.body.email)
//     console.log(req.body.mk)
// }
// return ;