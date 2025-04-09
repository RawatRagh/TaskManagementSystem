const Employee = require("../models/employeeModel")

const getEmployees = async (req, res) => {
    try{
        const result = await Employee.getEmployees();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: 'Error fetching employees', error});
    }
}

const getEmployeeById = async (req, res) => {
    try{
        const result = await Employee.getEmployeeById(req.params.userId);
        if (!result){
            return res.status(404).json({message: 'Employee not found'})
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: 'Error fetching employee', error});
    }
}

const createUpdateEmployee = async (req, res) => {
    try{
        const result = await Employee.createUpdateEmployee(req.body)
        res.status(201).json({message: 'Employee created'},recordset);
    } catch (error) {
        res.status(500).json({message: 'Error creating employees', error});
    }
}

module.exports = {
    getEmployees,
    getEmployeeById,
    createUpdateEmployee,
}