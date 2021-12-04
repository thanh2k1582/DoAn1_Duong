const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const studentRegis = new Schema({
    _id: {
        type: String,
        default: shortid.generate
      },
    email: { type: String, default: 'thanh2k1582@gmail.com' ,unique: true},
    mk: { type: String, default: 'thanh1582' },
    ten: { type: String, default: 'thanh' },
    ho: { type: String, default: 'nguyen' },
    ngaySinh: { type: String, default: '15/08/2000' },
    gioiTinh: { type: String, default: 'nam' },
    chucvu: { type: String, default: 'nam' },
},{
    timestamps: true
})
// studentRegis.pre('save',async (next)=>{
//     try{
//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(this.mk,salt)
//         this.mk = hashedPassword
//         next()
//     }
//     catch(err){
//         next(err);
//     }
// })


module.exports =  mongoose.model('loginAccount', studentRegis);