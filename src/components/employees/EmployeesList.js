import React from 'react';

import EmployeeCard from './EmployeeCard';

class EmployeesList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { employees, offset, limit } = this.props;
        const eToShow = employees.slice(offset, offset + limit);
        return (
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {eToShow.map((e, i) => {
                        return (
                            <EmployeeCard
                                key={i}
                                employee={e}
                            />
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default EmployeesList;