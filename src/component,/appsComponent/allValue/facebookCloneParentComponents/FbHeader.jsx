import React from 'react';
import BfUserImg from '../pic/shirin.jpg';

const FbHeader = (props) => {
    const displayMode = (e) => {
      console.log(e.target.value)
       
    }


    return (
        <div className='Fbheader'>
            {/* right Side search box  */}
            <div className='FbSearchBox'> <div className="searchIcon">
            π</div> <input type="text" placeholder='Search Faecbook...' /> </div>

            {/* midle menuber  */}
            <div className='midle_icon'>
                <div className="icon"><span className=''>β©</span></div>
                <div className="icon"><span className=''>π΄</span></div>
                <div className="icon"><span className=''>πΊ</span></div>
                <div className="icon"><span className=''>π¦ΈββοΈ</span></div>
                <div className="icon"><span className=''>β±</span></div>
                <div className="icon"><span className=''>β</span></div>
                <div className="icon"><span className=''>π</span></div>

                  {/* user acount */}
                <div className='Account'>
            <div className="FbUserImg">
            <img src={BfUserImg} alt="Avator" />
            </div>
            <div className="AccountName">
                <p>{props.userName}</p>
            </div>
           </div>
                <div className="icon"><span className=''>β½</span></div>
               < div className="icon"><span className=''><input  onClick={displayMode} type="checkbox" name="" id="" /></span></div>

            </div>       

        </div>
    );
};

export default FbHeader;