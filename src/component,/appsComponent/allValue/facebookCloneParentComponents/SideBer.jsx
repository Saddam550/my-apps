import React from 'react';

const SideBer = (props) => {
    return (
        <div className='FbSideBer'>
            <div className="FbFriend">
                <div className="friend">{props.icon}</div>
                <div className='titleName'>{props.title}</div>
            </div>
        </div>
    );
};

export default SideBer;