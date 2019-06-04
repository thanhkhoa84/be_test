import React from 'react';

const TextInput = ({
    type,
    name,
    label,
    onChange,
    placeholder,
    value,
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
                value={value}
                onChange={onChange}
            />
            {/* {error && <div className="error">{error}</div>} */}
        </div>
    )
}


export default TextInput;