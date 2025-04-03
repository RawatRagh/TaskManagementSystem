const { sql, poolPromise } = require("../config/dbConnection");

const getEmployees = async () => {
    try{
        const pool = await poolPromise;
        const result = await pool.request().execute('uspGetEmployees');
        return result.recordset;
    } catch (err) {
        console.log("SQL Error:", err)
        throw err;
    }
}

const getEmployeeById = async (userId) => {
    try{
        const pool = await poolPromise;
        const result = await pool.request()
            .input('UserId',sql.NVarChar, userId)
            .execute('uspGetEmployees');
        return result.recordset;
    } catch (error) {
        console.log("SQL Error:", err)
        throw err;
    }
}

const createUpdateEmployee = async (employee) => {
    try{
        const pool = await poolPromise;
        const result = await pool.request()
            .input('UserId', sql.NVarChar(50), employee.userId)
            .input('EmpName', sql.NVarChar(500), employee.name)
            .input('RoleID', sql.Int, employee.roleId)
            .input('Password', sql.NVarChar(500), employee.password)
            .input('IsActive', sql.Bit, employee.isActive)
            .input('Remark', sql.NVarChar(500), employee.remark)
            .input('Email', sql.NVarChar(500), employee.email)
            .input('Pic', sql.NVarChar(50), employee.pic)
            .input('ProjectIdList', createProjectListTVP(employee.projectIdList))
            .input('UpdateFlag', sql.Int, employee.updateFlag)
            .execute('uspGetEmployees')
        return result.recordset;
    } catch (error) {
        console.log("SQL Error:", err)
        throw err;
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createUpdateEmployee,
};