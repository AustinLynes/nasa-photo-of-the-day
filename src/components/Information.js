import React from 'react';

function Information (props){
    return(
        <div className={props.containerName}>
            <h1 className='title'>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
            <p>{props.copyright}</p>
        </div>
    )
}

export default Information;