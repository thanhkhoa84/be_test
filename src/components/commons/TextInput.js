import React from 'react';

const TextInput = ({
    type,
    name,
    label,
    onChange,
    placeholder,
    value,
    required,
    error
}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className="u-full-width"
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    )
}


export default TextInput;