import React from 'react';

const store = ({ userName, userAccountIMg ,bgImage}) => {
 
    return (
        <div className='store' >
            <div className="storeImg" style={{backgroundImage:`url(${bgImage})`}}>
                <div className="fontBg">
                <div className="userImgpadding">
                <div className="storeUserimg"><img src={userAccountIMg} alt="story" /></div>
                </div>
                <div className="storeUserName">{userName}</div>
                </div>
            </div>
            
        </div>
    );
};

export default store;