import React, { useEffect, useState } from 'react';
import CarrentVideo from './QuizApp componets/CarrentVideo';
import Progresber from './QuizApp componets/Progresber';
import QuizItem from './QuizApp componets/QuizItem';
import './QuizAppsStyle/quiz.css';

const Quiz = () => {
 const [videoShow , setVideoShow] = useState("none") 
const [width, setWidth]   = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
 let index = 1
 const setstyle= () =>{
  index++
if(index===1) {
  setVideoShow("block")

}else{
  index = 0
  setVideoShow("none")
}

}



const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);


    return (
        <div className='quizpage' style={{height:`${height}px` , width:`${width}px`}}>
         <QuizItem/>  

        <div className="progresber-video">
        <Progresber/> 
        <div className="nextQussen">
            <button className='next'>Next →</button>
        </div>
      <div onClick={setstyle} className="videoIcon">
        <div className="icon">◀</div>
      </div>
        </div>

        <CarrentVideo videoStyle={videoShow}/>
        </div>
    );
}

export default Quiz;
