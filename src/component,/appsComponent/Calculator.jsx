/* eslint-disable no-eval */

import { useState } from "react";

export default function Calculator() {

  const [mineValue , setValue ] = useState()
let values = (e)=>{
 let calbtnValue =  e.target.value

 let a = mineValue+calbtnValue
  setValue(a)



}


const square = ()=>{

let squareValue   = Math.sqrt(mineValue)
setValue(squareValue)

}

const ec = ()=>{
  setValue('')
}

const backMinusOne = ()=>{
  let backValue = mineValue.slice(0 , -1)
  setValue(backValue)
}

const evals = ()=>{
  let evants = eval(mineValue)
console.log(evants);
setValue(evants)

}
 
  return (
   
<>
<div className="calculatorBody">

  <input name="calulator" className="valueBox" disabled value={mineValue}/>

  <div className="calculatorbutton">
  <div className="fast">
  <input onClick={square} type='button' value='√'/>
    <input onClick={ec} type='button' value='EC'/>
    <input onClick={ec} type='button' value='c'/>
    <input onClick={backMinusOne} type='button' value='←'/>
  </div>

  <div className="secent">
  <input onClick={values} type='button' value='7'/>
    <input onClick={values} type='button' value='8'/>
    <input onClick={values} type='button' value='9'/>
    <input onClick={values} type='button' value='+'/>
  </div>
  <div className="thar">

    <input onClick={values} type='button' value='4'/>
    <input onClick={values}v type='button' value='5'/>
    <input onClick={values} type='button' value='6'/>
    <input onClick={values} type='button' value='-'/>
</div>

<div className="four">
    <input onClick={values} type='button' value='1'/>
    <input onClick={values} type='button' value='2'/>
    <input onClick={values} type='button' value='3'/>
    <input onClick={values} type='button' value='*'/>
</div>
  <div className="five">    
    <input onClick={values} type='button' value='0'/>
    <input onClick={values} type='button' value='.'/>
    <input onClick={evals} type='button' value='='/>
    <input onClick={values} type='button' value='/'/>
</div>
  </div>
</div>
  
  
  </>
  )
}
