import React from 'react';

const UserClient = (props) => {
    return (

            <div className="clientIfBox" id='Clinet'>
                    <div className="clientImgName">
                        <div className="clientImg">
                            <img src={props.ClientImg} alt="" />
                        </div>
                    <div className="clientNameBio">
                    <div className="clientName">{props.ClientName}</div>
                    <div className="clientBio">{props.clientBIO}</div>
                    </div>                    
                    </div>
                        <div className="clintDes">{props.ClintDES}</div>
        </div> 
    );
};

export default UserClient;