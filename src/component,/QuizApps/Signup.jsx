import React from 'react';
import image from '../../component,/appsComponent/allValue/pic/shirin.jpg';
import SignupFrom from './QuizApp componets//SignupFrom';
// import image2 from '../../component,/appsComponent/allValue/pic/woter.jpg';
const Signup = () => {
    return (
        <div className='bgColor'>

        <div className='Login' >
          <div className='loginImg'>
            <img 
            src={image}
            //  src={image2}
              alt=""
                />
            </div>
            <SignupFrom/>
        </div>
      </div>
            
       
    );
}

export default Signup;
