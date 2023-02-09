import React from 'react';
import quizVideoPoster from '../../appsComponent/allValue//pic/headers.jpg';
const CarrentVideo = (props) => {
const videoStyle = props.videoStyle

    return (
        
        <div className= "quizVideo" style={{display:`${videoStyle}`}}>
            <div className="videos">
            <video poster={quizVideoPoster} src=""></video>
            </div>
            <div className="videotitle">
                This a video title 
            </div>
        </div>
    );
}

export default CarrentVideo;
