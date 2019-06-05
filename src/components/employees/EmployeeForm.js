import React from 'react';

import TextInput from '../commons/TextInput';
import SelectInput from '../commons/SelectInput';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { options, employee, errors } = this.props;
        return (
            <form onSubmit={this.props.submitForm}>
                <h4>{!!this.props.edit ? 'Edit' : 'Add New'} Employee</h4>
                <div className="row">
                    <div className="u-full-width">
                        <TextInput
                            type="text"
                            name="name"
                            label="Employee Name"
                            placeholder="Employee Name"
                            value={employee.name}
                            required={false}
                            onChange={this.props.handleChange}
                            error={errors.name}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <TextInput
                            type="email"
                            name="email"
                            label="Employee Email"
                            placeholder="Employee Email"
                            value={employee.email}
                            required={false}
                            onChange={this.props.handleChange}
                            error={errors.email}
                        />
                    </div>
                    <div className="six columns">
                        <SelectInput
                            name="title"
                            label="Job Title"
                            defaultOption="Choose A Title"
                            value={employee.title}
                            onChange={this.props.handleChange}
                            required={false}
                            options={
                                options.map(title => ({
                                    value: title.id,
                                    text: title.name
                                }))
                            }
                            error={errors.title}
                        />
                    </div>
                    <input className="button-primary u-pull-right" type="submit" value="SAVE"></input>
                </div>
            </form>
        )
    }
}

export default EmployeeForm;
