import React from 'react';

const store = (prpos) => {
    const { userName, userAccountIMg ,bgImage}=prpos
    return (
        <div className='store' >
            <div className="storeImg" style={{backgroundImage:`url(${bgImage})`}}>
                <div className="fontBg">
                <div className="userImgpadding">
                <div className="storeUserimg"><img src={userAccountIMg} alt="" srcset={userAccountIMg} /></div>
                </div>
                <div className="storeUserName">{userName}</div>
                </div>
            </div>
            
        </div>
    );
};

export default store;