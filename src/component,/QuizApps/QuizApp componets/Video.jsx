import React from "react";
import { Link } from "react-router-dom";
import videoposter from '../../appsComponent//photos/2159.jpg';

const Videos = () => {
  return (
    <div className="videos">
      <Link to="./Quiz">
        <div className="video">
        <div className="image">
        <img src={videoposter} alt={videoposter} srcset={videoposter} />
        </div>
          <div className="video title">
            <h4>this is a video title get to api call</h4>
            <div className="quizDes">
                <p style={{color:"silver"}}>Quiz Number: 12</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Videos;
