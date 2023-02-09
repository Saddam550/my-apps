/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const BookCom = (props) => {
    return (
        <div className='books'>
          <div className="cardTextWhite">
           <div className="bookimg">
           <img className="cardImgTop" src={props.bookimg}></img>
           </div>
            <div className="cardBody">
              <h4 className="cardTitle bookname">Book name:{props.bookname}</h4>
              <p className="cardText bookprice">Price:{props.bookPrice}</p>
              <div className="bookorder">
              <button class="aboutBtn">order</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default BookCom;