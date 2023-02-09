import React from 'react'
import { Route, Router } from 'react-router-dom'

import '../QuizApps//QuizAppsStyle/login.css'
import '../QuizApps//QuizAppsStyle/video.css'
import Index from '../QuizApps/Index'
import Login from '../QuizApps/Login'
import Quiz from '../QuizApps/Quiz'
import Header from '../QuizApps/QuizApp componets/Header'
import Result from '../QuizApps/Result'
import Signup from '../QuizApps/Signup'

export default function QuizApps() {
  return (
    <div style={{background:"white", height:"100%"}}>
    <Router>

    <Header/>
     <Route path='../QuizApps/Index' index element={<Index/>}/>
     <Route path='../QuizApps/Quiz' index element={<Quiz/>}/>
     <Route path='../QuizApps/Login' index element={<Login/>}/>
     <Route path='../QuizApps/Signup' index element={<Signup/>}/>
     <Route path='../QuizApps/Result' index element={<Result/>}/>
    
    </Router> 
      
     

    </div>
  )
}
