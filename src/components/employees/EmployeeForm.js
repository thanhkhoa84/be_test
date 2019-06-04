import React from 'react';

import TextInput from '../commons/TextInput';
import SelectInput from '../commons/SelectInput';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { options, employee } = this.props;
        return (
            <form onSubmit={this.props.submitForm}>
                <div className="row">
                    <div className="u-full-width">
                        <TextInput
                            type="text"
                            name="name"
                            label="Employee Name"
                            placeholder="Employee Name"
                            value={employee.name}
                            onChange={this.props.handleChange}
                        // error={errors.category}
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
                            onChange={this.props.handleChange}
                        // error={errors.category}
                        />
                    </div>
                    <div className="six columns">
                        <SelectInput
                            name="title_id"
                            label="Job Title"
                            defaultOption="Choose A Title"
                            value={employee.title}
                            //error,
                            onChange={this.props.handleChange}
                            options={
                                options.map(title => ({
                                    value: title.id,
                                    text: title.name
                                }))
                            }
                        />
                    </div>
                    <input className="button-primary u-pull-right" type="submit" value="SAVE"></input>
                </div>
            </form>
        )
    }
}

export default EmployeeForm;
