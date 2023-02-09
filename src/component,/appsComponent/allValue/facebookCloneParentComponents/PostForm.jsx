import React, { useState } from 'react';

const PostForm = (props) => {

    const [userpostitem, setuserpostitem] = useState()
    const [userURL, setuserURL] = useState()
    
 
    const postHendle=(e) =>{
 
e.preventDefault()
setuserpostitem('')
setuserURL('')

    
    } 
    // const userpostFrom=(e) =>{
     
       
    // if (e.target.type==='text') {
    //     const userpostValue =  e.target.value
    //     setuserpostitem(userpostValue) 
       
     
    // }
    // else if (e.target.type==='url') {
    //     const userpostValue =  e.target.value
    //     setuserpostitem(userpostValue) 
     
    // }
    // }

// console.log(userpostitem);
console.log(userpostitem);
    const {userAccountIMg} = props
    return (
        <div className='userPostArea'>
            <form className='userPost'>
                
            <div className="usermoment">
                <div className="userAccountImg">
                    <img src={userAccountIMg} alt="" srcset={userAccountIMg}  />
                </div>
                <input onChange={(e)=>setuserpostitem(e.target.value)} value={userpostitem} style={{width:"352px"}} type="text" placeholder='What is your moment ... ' />
             </div>  
             <div className="postuserImg">
                <input type="url" value={userURL} onChange={(e)=>setuserURL(e.target.value) }   placeholder='Image URL...' />   
                          
                </div>   
                <button  onClick={postHendle}> button</button>           
            </form>

<div className="userpostmenu">
    <div className="videoPost userPostIcon">
        <div className="videoIcon">'📺</div>
        <div className="videoName">Live video</div>
    </div>
    <div className="photoPost userPostIcon">
        <div className="photoIcon">📷</div>
        <div className="photoName">Photo</div>

    </div>
    <div className="textPost userPostIcon">
        <div className="textIcon">Ͳ</div>
        <div className="textName">Text</div>

    </div>
</div>
        </div>
    );
};

export default PostForm;