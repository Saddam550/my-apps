import { useState } from "react";

function UseStateFuntion(){

        const [todo, settingtodo]= useState('' )
        const [waring, settingWarning]= useState('')

   const HandalingValue =(e)=>{
        const fromValue = e.target.value
        const waring = fromValue.includes(".js")?"you need javascript skill to cpmplate the task. Do you have it":null

        settingtodo(fromValue)
        settingWarning(waring)

   }

    return (
        <div> <br/>
             <fieldset>
            <p> Useing  for UseState</p>
            <p> {todo}</p>
            < input type="text" name='name' onChange={HandalingValue}/>
            <h2>{waring ||"Good Choise"}</h2></fieldset>
        </div>)
}
export default UseStateFuntion