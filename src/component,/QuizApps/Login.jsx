import React from 'react';
import image from '../../component,/appsComponent/allValue/pic/shirin.jpg';
// import image2 from '../../component,/appsComponent/allValue/pic/woter.jpg';
import LoginFrom from './QuizApp componets/LoginFrom';

const Login = () => {

    return (
      <div className='bgColor'  >
        <div className='Login' >
          <div className='loginImg'>
            <img 
            src={image}
            //  src={image2}
              alt=""
                />
            </div>
            <LoginFrom/>
        </div>
      </div>
    );
}

export default Login;
