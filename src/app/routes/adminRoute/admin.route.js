const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/adminController/AdminController.js')

router.use('/confirm',adminController.confirm)
router.use('/',adminController.index)
module.exports =router