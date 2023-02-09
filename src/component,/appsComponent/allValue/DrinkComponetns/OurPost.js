import React from 'react';

const OurPost = (props) => {


  
    return (
   
    
            <div className="cardTextTeft" id='Post'>
            <img className="cardImgTop" src={props.postImg} alt=""/>
              <div className="cardBody">
                <h4 className="cardTitle">what is mineral woter?</h4>
                <p className="cardText">my Company bery pupolar Iure Tenetur Doloribus Distinctio Aliquam Mollitia, Quis Quam Velit </p>
              </div>
              <div className='CardFoter'>
              <button className="aboutBtn customizeBtnCard">Client</button>
              <div className='posterName'>Saddam</div>
              </div>

            </div>            
    
    
    );
};

export default OurPost;