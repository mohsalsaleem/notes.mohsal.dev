import React from 'react';

import './index.css';

export const TextCount = (props) => {
    return(
        <span className={props.className + " text-count"}>{props.text.length}/{props.maxLength}</span>
    )
}
