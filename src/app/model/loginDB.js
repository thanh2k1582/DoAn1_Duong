const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
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
studentRegis.pre("save", function (next) {
    const user = this
  
    if (this.isModified("mk") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.mk, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.mk = hash
            next()
          })
        }
      })
    } else {
      return next()
    }
  })
module.exports =  mongoose.model('loginAccount', studentRegis);