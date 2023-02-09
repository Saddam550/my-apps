/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import { useState } from "react"

export default function TexConvart(){

    const [ value , useValue] = useState('')
    const [ yourCopyText , TextCopy] = useState("")
    let [ bg , bgStyle] = useState("black")
    let [ textcolor , textColorSetting] = useState("")
    let [ boxColor,  Boxbg] = useState("black")
    let [ boxTextColor,  BoxText] = useState("white")
    let [ fontSizes,  fontStting] = useState()

    const mode=(e)=>{       
        
    //    let modes =  document.getElementById("chackbox")
       if ( e.target.checked ) {
        bgStyle("darkblue")
        textColorSetting("white")
        Boxbg("#161648")
        BoxText("white")
        
  
       }else{
        bgStyle("white")
        textColorSetting("black")
        Boxbg("gray")
        BoxText("black")
      
                 


       }
    
     

         }
   const  HandlingStyle = {    
        textAlign: "left",
        margin:"0px 30px"

  } 
    const  valueStyle = {    
        color: "red",
        fontSize:"50" ,
        display: "inline"

  }   
   const  btnstyle = {    
        color: textcolor,
        background:"blue",
        outline:"none",
        with:"40px",
        height:"30px",
        cursor:"pointer",
        margin:"0px 2px",
        padding:" 0px 5px"
       

  }  
 const  ChangeHandeil = (event)=>{
  let chageValues = event.target.value
  useValue(chageValues)
  
}

const ToUppercase = ()=>{
   let upper =  value.toLocaleUpperCase()
   useValue(upper)
}
const Tolowercase = ()=>{
   let upper =  value.toLocaleLowerCase()
   useValue(upper)
}
const ClearText = ()=>{
   let upper = ""
   useValue(upper)
}
const CopyText = ()=>{
    if (value.length<1) {
        TextCopy("Please typing your Comments...")
        setTimeout(() => {
            TextCopy("")
        }, 1000);
    }else{
        
    let box = document.getElementById("myBox")
    // box.select()
    navigator.clipboard.writeText(box.value)
    TextCopy("Your From Text Copy Done...")
    setTimeout(() => {
        TextCopy("")
    }, 1000);

}
}
    const RemoveEstraSpace = ()=>{
 let newText = value.split(/[ ]+/)
 useValue(newText.join(" "))
   
 } 

 const optionValue=(e)=>{
   let optionVal =  e.target.value
   fontStting(optionVal)
console.log(fontSizes);
 }  

document.body.style.background=bg
 
 return(
     <div style={{background:bg, transition:"all 0.3s cubic-bezier(0.4, 0, 1, 1) 0s", color: textcolor,}}>
              <p>{yourCopyText}</p>
          <div style={HandlingStyle}>
              <div className="header">        
                 Display Mode: <span></span> <input type="checkbox"  onClick={mode} name="checkbox" id="checkbox"  value={bg}></input>{bg}
                    <h2 style={HandlingStyle}>Enter Your Text...</h2>
               </div>                
                   <textarea style={{ background:boxColor, color:boxTextColor, fontSize:fontSizes+"px"}} id="myBox" onChange={ChangeHandeil} value={value} name=""  cols="70" rows="10"></textarea><br></br>
                   <input type="button" style={btnstyle} onClick={ToUppercase} value="Convart to Uppercase "></input>

                    <input type="button" style={btnstyle} onClick={Tolowercase} value="Convart to Lowercase "></input>
                    <input type="button" style={btnstyle} onClick={ClearText} value="Clear Text "></input>
                <input type="button"  style={btnstyle} onClick={CopyText} value="Copy" ></input>
                    <input type="button" style={btnstyle} onClick={RemoveEstraSpace} value="Remove Extra Space" ></input>
                    <select style={btnstyle} onClick={optionValue} > 
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                    </select>
                  
               <h2>your Text Summary</h2>
                <p> your english word: <h3 style={valueStyle}>{value.split(" ").length-1} </h3> and carector: <h3 style={valueStyle}>{value.length}</h3>  minutes Read <h3 style={valueStyle}>{0.008*value.split(" ").length}</h3></p>
                <h2> Preview </h2>
                <p>{value}</p>
            </div>
                <br></br> <br></br>
  </div>
        )
   
}