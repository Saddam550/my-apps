import React, { useState } from 'react';
import loginImage from './allValue/pic/shirin.jpg';


const LoginPage = (props) => {
const [Login, setLogin] = useState()



    const onsubmits=(e)=>{
        setLogin(e.target.value)
    }
    const LoginHendle =(e) => {
        e.preventDefault()
        props.onUserData(Login) 
        setLogin('')
    }
    return (
        <div className='LoginPage'>
           <center className='loginPageMedileArea'>
            <div className="loginImage">
                <img src={loginImage} alt="Login loginImage" />
            </div>
           <form  >           
                <input value={Login}  onChange={onsubmits} type="text" placeholder='name...' /> <br/>
                <button onClick={LoginHendle}> Login</button>
               
            </form>
           
           </center>
            
        </div>
    );
};

export default LoginPage;