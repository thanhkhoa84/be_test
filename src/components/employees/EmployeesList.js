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
            <div className="row">
                <ul className="employees-list">
                    {eToShow.map((e, i) => {
                        return (
                            <li key={i}>
                                <EmployeeCard
                                    employee={e}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default EmployeesList;