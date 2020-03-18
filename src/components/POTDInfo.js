import React from "react";

const POTDInfo = (props) => {
    return (
        <div className='pic-info'>
            <div className='potd-title'>
                <h1>{props.title}</h1>
                <h3>{props.date}</h3>
            </div>
            
            <p>{props.text}</p>
        </div>
    )
}

export default POTDInfo