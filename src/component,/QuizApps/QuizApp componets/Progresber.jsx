import React, { useState } from "react";

const Progresber = () => {
    const [toolkitShow ,settoolkitShow]= useState('')

  const toolkit = () => {
    settoolkitShow("block")
  };
  
  
  const toolkitHide = () => {
    settoolkitShow("none")
  };
  
  console.log(toolkitShow);
  return (
    <div className="Progresber">
      <div  style={{display:`${toolkitShow}`}} className="toolkit">
        <p>count 100</p>
      </div>
      <div  className="progresbody">
        <div onMouseOut={toolkitHide} onMouseMove={toolkit} className="progres"></div>
      </div>
    </div>
  );
};

export default Progresber;
