import React, { useEffect, useState } from 'react';

import './index.css';
import { TextCount } from '../TextCount';

const MAX_LENGTH = 160;

const NoteTitleEditor = (props) => {
    
    const [title, setTitle] = useState('');
    const [showTextCount, setShowTextCount] = useState(false);

    useEffect(() => {
        setTitle(props.title)
    }, [props.title])

    const handleChange = (event) => {
        if(event.target.value.length <= MAX_LENGTH) {
            setTitle(event.target.value)
            props.onChange(event)
        }
    }

    const _onFocus = () => {
        setShowTextCount(true)
    }

    const _onBlur = () => {
        setShowTextCount(false)
    }

    return (
        <div className="NoteTitleEditor-title-wrapper">
            <input
                type="text"
                value={title} 
                onChange={handleChange} 
                placeholder="Title here" 
                className="NoteTitleEditor-title" 
                onFocus={_onFocus}
                onBlur={_onBlur}
            />
            {
                showTextCount ? 
                <TextCount className="NoteTitleEditor-text-count" text={title} maxLength={MAX_LENGTH} /> : null
            }
        </div>
    )
}

export default NoteTitleEditor;
