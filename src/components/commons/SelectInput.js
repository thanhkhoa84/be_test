import React from 'react';

const SelectInput = ({
    name,
    label,
    onChange,
    onBlur,
    defaultOption,
    value,
    options,
    required,
    error,
}) => {
    return (
        <div>
            <label htmlFor="employeeTitle">{label}</label>
            <select
                className="u-full-width"
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
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
            {error && <span className="error">{error}</span>}
        </div>
    )
}

export default SelectInput;