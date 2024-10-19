const express=require('express')

const employeeController=require('../controllers/employeeControllers')

const router=express.Router()

router.post('/addemp',employeeController.addEmployees)
router.get('/getemp',employeeController.getEmployees)
router.delete('/deleteemp/:id',employeeController.deleteEmployees)
router.put('/updateemp/:id',employeeController.updateEmployees)
module.exports=router