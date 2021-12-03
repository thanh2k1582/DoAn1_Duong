const loginAccount = require('../model/loginDB')
class RegisterController{
    register(req,res){
        res.render('register_login/register');
    }
    newAccount(req,res){
    const newAcc = new loginAccount(req.body)
    newAcc.save()
        .then(()=>{
            res.redirect('/login')}) //quay về trang chủ
        .catch(erro => {
    })

    }
}
module.exports = new RegisterController;