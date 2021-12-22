import React from 'react';

const Grid = ({ config, data }) => (
    <table>
        <thead>
        <tr>
            {config.map((item, index) => <th key={index}>{item.title}</th>)}
        </tr>
        </thead>
        <tbody>
                {data.map((item, index) => <tr key={index}>{config.map(({component, field}, cellIndex) => {
                    return (<td key={cellIndex}>{(component && component({data: item[field]})) || item[field]}</td>)
                })}</tr>)}
        </tbody>
    </table>
);

export default Grid;
