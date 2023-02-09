import React, { useState } from 'react'
import styled from 'styled-components'


export default function FqaValue(props) {
const [toggleAnwer, settoggleAnwer] = useState(true)

  const FQACollaps = styled.div`
     
  `
    const FqaBox = styled.div`
    margin: 10px;
  `  
  const QussentAre = styled.div`
  background: red;
  width: 70%;
  margin: auto;
  padding: 2px;
  text-align: left;
  display: flex;
  justify-content: space-between;

  `
    const Qusent = styled.div`
    font-family: revert;
    text-align: left;
    padding: 10px;
    display: inline-block;
  ` 
   const Close = styled.span`
   transform: rotate(45deg);
   font-size: 40px;
   display: block;
   cursor:pointer;
   transition: all 20s;
   `
      const CloseBtn = styled.div`
   

   color: white;
   background: rgb(0, 0, 0);
   padding:0px 11px;
   font-size: 16px;
   text-transform: uppercase;
   cursor: pointer;
   transition: all .1s;
   border: 1px solid darkblue;
   border-radius: 100px;
  `
  const a = "transition: all 20s;transform: scaleY(0);transform-origin: top; display:none; "
  const b = "transition: all 20s;transform: scaleY(1); display:block;"


      const Answer = styled.div`
      font-family: cursive;
      background: blue;
      width: 70%;
      margin:auto;
      margin-bottom: 10px;
      padding: 20px;
      text-align: left;
      display: flex;
      justify-content: space-between;
      border-top:1px solid darkBlue;
      transition: all 40s;
      border: 1px solid darkblue;
    ${toggleAnwer? a:b}
    ${toggleAnwer?b:a}

  `
  var aIndex = 1
  let toggel = ()=>{
    aIndex++
    if (aIndex<2) {
    settoggleAnwer(aIndex===1)
    console.log(aIndex);
    
    }else{
      settoggleAnwer(aIndex===0)
      aIndex=0
      console.log(aIndex);
    }
  }
    
   
    // var tesIndex = 0
    // let toggels = ()=>{
    //   tesIndex++
    //   if (tesIndex<2) {    
    //   console.log(tesIndex);        
    //   }else{  
    //     tesIndex=0
    //     console.log(tesIndex);
    //   }
    // }
   
  return (

    <FQACollaps >
{/* <p onClick={toggels}>asdsadf</p> */}
<FqaBox>
  <QussentAre>
  <Qusent> {props.yourQusent}</Qusent>
   <CloseBtn onClick={toggel} > <Close>+</Close></CloseBtn>
  </QussentAre>
  <Answer>
    {props.yourAns}
   </Answer>
</FqaBox>
    </FQACollaps>
  )

  }