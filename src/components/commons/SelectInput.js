import React from 'react';

const SelectInput = ({
    name,
    label,
    onChange,
    defaultOption,
    value,
    error,
    options
}) => {
    return (
        <div>
            <label htmlFor="employeeTitle">{label}</label>
            <select
                className="u-full-width"

                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">{defaultOption}</option>
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.text}>
                            {option.text}
                        </option>
                    );
                })}
            </select>
            {/* {error && <div className="error">{error}</div>} */}
        </div>
    )
}

export default SelectInput;