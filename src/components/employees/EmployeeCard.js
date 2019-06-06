import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
    const avatar = `https://ui-avatars.com/api/?size=120&font-size=0.25&background=00003b&color=ffc523&name=${employee.name.split(' ').join('+')}`
    return (
        <div className="employee-card">
            <div className="employee-card-header">
                <h3><Link to={`/employee/${employee.id}`}>{employee.name}</Link></h3>
                <h4>Employee Id: {employee.id}</h4>
            </div>
            <div className="employee-card-image"><Link to={`/employee/${employee.id}`}><img src={avatar} alt={employee.title} /></Link></div>
            <div className="employee-card-footer">
                <h4>{employee.title}</h4>
            </div>
        </div>
    )
}

export default EmployeeCard;