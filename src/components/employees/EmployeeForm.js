import React from 'react';

import TextInput from '../commons/TextInput';
import SelectInput from '../commons/SelectInput';
import { isValid } from 'ipaddr.js';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { submitForm, edit, isValid, options, employee, errors, saving, deleteUser, handleChange, onBlur } = this.props;
        return (
            <form onSubmit={submitForm}>
                <h4>{edit ? 'Edit' : 'Add New'} Employee</h4>
                <div className="row">
                    <div className="u-full-width">
                        <TextInput
                            type="text"
                            name="name"
                            label="Employee Name"
                            placeholder="Employee Name"
                            value={employee.name}
                            required={false}
                            onChange={handleChange}
                            onBlur={onBlur}
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
                            onChange={handleChange}
                            onBlur={onBlur}
                            error={errors.email}
                        />
                    </div>
                    <div className="six columns">
                        <SelectInput
                            name="title"
                            label="Job Title"
                            defaultOption="Choose A Title"
                            value={employee.title}
                            onChange={handleChange}
                            onBlur={onBlur}
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
                    <div className="u-pull-right form-actions">
                        {edit && <a className="button" onClick={() => deleteUser(employee.id)}>DELETE</a>}
                        <button
                            className="button-primary"
                            type="submit"
                            disabled={saving}
                            type="submit"
                        >{saving ? "SAVING..." : "SAVE"}</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EmployeeForm;
