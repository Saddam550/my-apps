import React from 'react';

function DrinkAbout(props) {
    return (
        <div className='aboutValues' id='About'>
            <div className="valuesAll">
                <div className="fastPra">{props.fastPra}</div>
                <div className="secentPra">{props.secentPra}</div>
                <div className="tharPra">{props.tharPra}</div>
                <button className="aboutBtn">Read more...</button>
            </div>
            <div className="videoBtnBg">
            <div className="videoBtnAnimation">
            <div className="videoBtnIcon"> <a  className="videoBtnIcon" href="http://">▶</a>  </div>
                </div>
            </div>
        </div>
    );
}

export default DrinkAbout;