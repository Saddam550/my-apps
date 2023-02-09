import React from 'react';

function ComNames(props) {
    const nameTitle = props.nameTitle
    const names = props.names
    return (
        <div>
           <div className='nameTitle'>{nameTitle}</div>
           <div className='names'>{names}</div>
        </div>
    );
}

export default ComNames;