import React from 'react';
import { Link } from 'react-router-dom';

class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { employees } = this.props;
        return (
            <tbody>
                {employees.map((e, i) => {
                    return (
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td><Link to={`/employee/${e.id}`}>{e.name}</Link></td>
                            <td>{e.title}</td>
                            <td>{e.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        );
    }
}

export default EmployeesList;