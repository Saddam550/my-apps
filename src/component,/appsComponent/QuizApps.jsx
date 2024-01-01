import React from 'react'

// import { AuthProvider } from '../../assets/AuthContext'
import '../QuizApps//QuizAppsStyle/login.css'
import '../QuizApps//QuizAppsStyle/video.css'
// import Index from '../QuizApps/Index'
import Login from '../QuizApps/Login'
// import Quiz from '../QuizApps/Quiz'
import Header from '../QuizApps/QuizApp componets/Header'
// import Result from '../QuizApps/Result'
// import Signup from '../QuizApps/Signup'

export default function QuizApps() {
  return (
    <div style={{background:"white", height:"100%"}}>
     <Header/>
{/* <Routes> */}
{/* <AuthProvider> */}
<Login/>

{/* <Route path='../QuizApps/Index' index element={<Index/>}/>
     <Route path='../QuizApps/Quiz' index element={<Quiz/>}/>
     <Route path='../QuizApps/Login' index element={<Login/>}/>
     <Route path='../QuizApps/Signup' index element={<Signup/>}/>
     <Route path='../QuizApps/Result' index element={<Result/>}/> */}

     {/* </AuthProvider> */}
{/* </Routes> */}
   
    
      
     

    </div>
  )
}
