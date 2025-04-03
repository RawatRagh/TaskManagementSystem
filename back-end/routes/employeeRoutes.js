const express = require("express");
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employees',employeeController.getEmployees);
router.get('/employees/:id',employeeController.getEmployeeById)
router.post('/employees',employeeController.createUpdateEmployee)
router.put('/employees/:id',employeeController.createUpdateEmployee)
//router.delete('/employees/:id',employeeController.deleteEmployee)

module.exports = router