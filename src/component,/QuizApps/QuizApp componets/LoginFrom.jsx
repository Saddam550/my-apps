import React from 'react';

const LoginFrom = () => {
    return (
        <div className='LoginFrom'>
            <form action="" method="post">
                <input type="name" placeholder='user Name' />
                <input type="password" placeholder='password'/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginFrom;
