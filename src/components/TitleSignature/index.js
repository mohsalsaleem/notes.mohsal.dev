import React, { useState, useEffect } from 'react';

const TitleSignature = (props) => {

    const [signature, setSignature] = useState("")

    useEffect(() => {
        setSignature(signature => converTitleToSignature(props.title))
    }, [])

    const converTitleToSignature = (title) => {
        return title && title.length ? title[0] : "";
    }

    return (
        <div>
            {signature}
        </div>
    )
}

export default TitleSignature;
