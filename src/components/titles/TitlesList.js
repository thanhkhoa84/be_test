import React from 'react';

import TitleRow from './TitleRow';

const TitlesList = ({ titles }) => {
    return (
        <table className="u-full-width">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {titles.map((t, i) => {
                    return (
                        <TitleRow key={i} title={t} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default TitlesList;