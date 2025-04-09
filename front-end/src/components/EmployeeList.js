import React, {useEffect, useState} from 'react';
import axios  from '../api/axios';
import DataTable from './DataTable';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/employees');
                setEmployees(response.data);
            }catch(error){
                console.error('Error fetching employess:'. error)
            }
        };
        fetchEmployees();
    },[]);


const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

const handleRowSelect = (rowData) => {
    setSelectedEmployeeData(rowData);
    console.log('Selected User Data:', rowData);
}

const employeeColumns = React.useMemo(
    () => [
       { Header: 'User Id', accessor: 'UserId'},
       { Header: 'Employee Name', accessor: 'EmpName'},
       { Header: 'Role Id', accessor: 'RoleId'},
    ],
    []
);

return (
    <div>
    <h1>Employee List</h1>
    {selectedEmployeeData && (
        <div>
            <h2>Selected Employee Details</h2>
            <p>ID: {selectedEmployeeData.UserId}</p>
            <p>Name: {selectedEmployeeData.EmpName}</p>
        </div>
    )}
    <DataTable columns={employeeColumns} data={employees} onRowSelect={handleRowSelect}/>
    </div>
);

/*
    return (
        <div>
            <h1>---Employee List---</h1>
            <ul>
                {
                    employees.map(employee =>
                    {
                        return(
                        <li> UserId - {employee.UserId}, Name - {employee.EmpName}, RoleId - {employee.RoleId}, Assigned Project ID - {employee.ProjectId}, Assigned Project Names - {employee.ProjectName}</li>
                        );
                    })
                }
            </ul>
        </div>
    );

*/
};
export default EmployeeList;