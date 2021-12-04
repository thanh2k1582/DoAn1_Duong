const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/adminController/AdminController.js')

router.use('/:id/updateOneTeacher',adminController.updateOneTeacher)
router.use('/:id/updateOneStudent',adminController.updateOneStudent)
router.use('/confirmTeacher',adminController.confirmTeacher)
router.use('/confirmStudent',adminController.confirmStudent)
router.use('/',adminController.index)
module.exports =router