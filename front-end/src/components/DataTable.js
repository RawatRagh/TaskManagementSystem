import React, { useState } from "react";
import { useTable, useRowSelect} from "react-table";
import '../App.css';



const DataTable = ({ columns, data, onRowSelect }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
    } = useTable (
        {
            columns, 
            data,
            initialState : {selectedRowIds: {}},
        },
        useRowSelect
    );
    const selectedRows = selectedFlatRows.map(row => row.original);
    const [selectedRow, setSelectedRow] = useState(null);
    const [classRequird, setClassRequired] = useState (0);

    let temp;

    const handleRowSelection = (row) => {
        const isSelected = selectedRows.some(selectedRow => selectedRow.id === row.original.id);
        //const isSelected = selection
        if (isSelected) {
            onRowSelect(null)
        }
        else {
            onRowSelect(row.original)
        }            
        setSelectedRow(row.id);
        //onRowSelect(row);
        temp = row.id
        //classCall(row.id)

    }

    const classCall = (id) =>{
        if (id === selectedRow){
            setClassRequired(1)
        }
    }

    
    
    
    return(
        <table {...getTableProps()} className="table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    //const isSelected = selectedRows.some(selectedRow => selectedRow.id === row.original.id);
                    

                    return (
                        <tr {...row.getRowProps()}
                        key={row.id}
                        onClick={()=> handleRowSelection(row) }
                        className={temp === row.id ? 'selected' : ''}
                        >
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}

            </tbody>
        </table>
    );
};

export default DataTable;