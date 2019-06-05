import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
    return (
        <tr>
            <td>{employee.id}</td>
            <td><Link to={`/employee/${employee.id}`}>{employee.name}</Link></td>
            <td>{employee.title}</td>
            <td>{employee.email}</td>
        </tr >
    )
}

export default EmployeeCard;