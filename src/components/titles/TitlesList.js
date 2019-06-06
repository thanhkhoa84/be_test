import React from 'react';

import TitleRow from './TitleRow';

const TitlesList = ({ titles }) => {
    return (
        <div className="titles-list">
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th style={{ width: `10px` }}>ID</th>
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
        </div>
    )
}

export default TitlesList;