/* eslint-disable no-unused-vars */
import React from "react"
import { convator, ToFahrenhite } from "../../lift/convater"
import BoilngVardict from "./BoilngVardict"
import Input from "./Input"

export default class Calculator extends React.Component{

    state={
    temperature: "",
    scel: "c"
    }

    HandilCahnge = (e, scel)=>{
this.setState({
    temperature:e.target.value,
    scel
})
    }
render(){
 


    const {temperature,scel} = this.state;
    const celsius = scel==="f" ? convator(temperature,  ):temperature;
    const farhinhite = scel==="c" ? convator(temperature, ToFahrenhite):temperature;
   
    return(

       <div>
      <Input scel="c" temperature={celsius} onTemperatureHandelir={this.HandilCahnge}/>
      <Input scel="f" temperature={farhinhite} onTemperatureHandelir={this.HandilCahnge}/>     
        <BoilngVardict c={parseFloat(temperature)}/>
        </div>

    )
}
}
