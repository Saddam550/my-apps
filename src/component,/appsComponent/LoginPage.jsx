import React, { useState } from 'react';

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
        <div>
           <center>
           <form  >
           
                <input value={Login}  onChange={onsubmits} type="text" placeholder='name...' />
                <button onClick={LoginHendle}> Login</button>
               
            </form>
           
           </center>
            
        </div>
    );
};

export default LoginPage;