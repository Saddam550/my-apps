import React, { useState } from 'react'
import FbHeader from './allValue/facebookCloneParentComponents/FbHeader'
import './allValue/facebookCloneParentComponents/FbHeaderStyle.css'
import Feed from './allValue/facebookCloneParentComponents/Feed'
import './allValue/facebookCloneParentComponents/PostStyle.css'
import SideberComponentMenu from './allValue/facebookCloneParentComponents/SideberComponentMenu'
import './allValue/facebookCloneParentComponents/SideBerStyle.css'
import './allValue/facebookCloneParentComponents/StoreStyle.css'
import Wiget from './allValue/facebookCloneParentComponents/Wiget'
import './allValue/facebookCloneParentComponents/wigetstyle.css'
import LoginPage from './LoginPage'



export default function FacebookClone() {
const [userLoginData, setuserLoginData] = useState()
const getData= (loginData)=>{
  setuserLoginData(loginData);

}

let data = new Date()
let curruntTime = data.getMinutes()
  const user = userLoginData

  return (
    <>
    {!user ? (<LoginPage onUserData={getData}/>): (
    <div className='FacebookClone'> 
      {/* header  */}
      <FbHeader userName={user}/>
      <div className='feed'>
      {/* sideber */}
        <SideberComponentMenu userName={user} />
      {/* feed  */}
      <Feed userName={user} postTime={curruntTime}/>
      
      {/* wigit  */}
    <Wiget/>

      </div>
    </div>
    )}
    </>
  )
}
