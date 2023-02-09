import React from 'react';




function IconBox(props) {
    return (
     
        <div className='iconBox'>
            <div className="woterDreamText hoverColor">
            <p className='icon'>🥃</p>
                <p className="text">{props.woterFishText}</p>
            </div>
            <div className="woterDeleverText hoverColor">
                <p className='icon'>♿</p>
                <p className="text">{props.woterDeleverText}</p>
                
            </div>
            <div className="woterManyText hoverColor " >
            <p className='icon'>💸</p>
                <p className="text">{props.woterManyText}</p>
            </div>
            <div className="woterFishText hoverColor">
            <p className='icon'>🐬</p>
                <p className="text">{props.woterDreamText}</p>
            </div>
        </div>
    );
}

export default IconBox;