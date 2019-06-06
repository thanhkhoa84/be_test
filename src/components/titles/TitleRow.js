import React from 'react';

const TitleRow = ({ title }) => {
    return (
        <tr>
            <td>{title.id}</td>
            <td>{title.name}</td>
        </tr >
    )
}

export default TitleRow;