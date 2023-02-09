import React from "react"
const scelName = {
    c:"celsuse",
    f:"Fahrenhite"
}

export default function Input({temperature, scel, onTemperatureHandelir }){



    return(  

    
         <fieldset>
            <legend>Eenter temperature in {scelName[scel]}:</legend>
            <input type="text" value={temperature} onChange={(e)=>onTemperatureHandelir(e,scel)} />
        </fieldset>
      
        
     
    )

}
